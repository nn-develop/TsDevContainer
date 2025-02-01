import React from "react";
import { useFormContext } from "react-hook-form";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="password" id={id} {...register(id)} {...props} />
      {errors[id] && typeof errors[id].message === "string" && (
        <span>{errors[id].message}</span>
      )}
    </div>
  );
};

export default PasswordInput;
