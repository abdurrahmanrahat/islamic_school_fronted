import { Controller, useFormContext } from "react-hook-form";

type TRadioOption = {
  value: string;
  label: string;
};

type TRadioProps = {
  name: string;
  options: TRadioOption[];
  className?: string;
};

const ISRadio = ({ name, options, className = "" }: TRadioProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <div className={className}>
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                {...field}
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)} // Ensure correct value updates
                className="cursor-pointer"
                required
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    />
  );
};

export default ISRadio;
