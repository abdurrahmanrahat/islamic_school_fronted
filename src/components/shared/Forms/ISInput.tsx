import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type?: string;
  className: string;
  placeholder: string;
};

const ISInput = ({
  name,
  type = "text",
  className,
  placeholder,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          required
          className={className}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default ISInput;
