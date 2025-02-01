import React from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...register(id)} {...props} />
      {errors[id] && typeof errors[id].message === "string" && (
        <span>{errors[id].message}</span>
      )}
    </div>
  );
};

export default TextInput;
