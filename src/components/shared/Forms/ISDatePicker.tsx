import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, parseISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

type ISDatePickerProps = {
  name: string;
  className?: string;
  placeholder?: string;
};

const ISDatePicker = ({
  name,
  className = "",
  placeholder = "Pick a date",
}: ISDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const selectedDate = value ? parseISO(value) : undefined;

        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${className}`}
              >
                {selectedDate ? (
                  format(selectedDate, "PPP")
                ) : (
                  <span>{placeholder}</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    // Format only the date (YYYY-MM-DD) to avoid storing time
                    onChange(format(date, "yyyy-MM-dd"));
                  } else {
                    onChange(""); // Reset if no date is selected
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        );
      }}
    />
  );
};

export default ISDatePicker;
