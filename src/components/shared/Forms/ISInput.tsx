import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
};

const ISInput = ({ name, type = "text" }: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <input {...field} type={type} required />}
    />
  );
};

export default ISInput;
