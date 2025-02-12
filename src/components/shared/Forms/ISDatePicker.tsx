"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            value={value ? dayjs(value) : null}
            onChange={(date) => onChange(date ? date.format("YYYY-MM-DD") : "")}
            className={className}
            slotProps={{
              textField: { placeholder, fullWidth: true, variant: "outlined" },
            }}
            format="YYYY-MM-DD"
            openTo="year" // Opens directly to year selection
            views={["year", "month", "day"]} // Allows selecting year, then month, then day
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default ISDatePicker;
