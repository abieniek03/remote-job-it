import * as z from "zod";
import { loginFormMessage } from "./message";

export const loginFormSchema = z.object({
	email: z.string().email({ message: loginFormMessage.email.valid }),
});
