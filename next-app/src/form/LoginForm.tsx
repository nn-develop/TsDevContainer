import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "./PasswordInput";
import TextInput from "./TextInput";
import { loginUser } from "../services/authService";

const schema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// raději se podívat na nativní validaci než jen na externí knihovny
// type LoginFormData = z.infer<typeof schema>; toto by bylo lepší, protože si to bere typ ze schématu a nemusím to pak ještě přepisovat jinde.

interface LoginFormData {
  username: string;
  password: string;
}

// typescript by ověřil tak jako tak, že jsou data správného typu

const LoginForm = () => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    try {
      const response = await loginUser(data);
      console.log("Login successful", response);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput id="username" label="Username" />
        <PasswordInput id="password" label="Password" />
        <button type="submit">Login</button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
