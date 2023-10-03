import * as z from "zod";
import { registerFormMessage } from "./message";

export const passwordSchema = z
	.string()
	.min(6, { message: registerFormMessage.password.min })
	.refine(
		(value) => {
			const hasDigit = /\d/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasUpper = /[A-Z]/.test(value);
			const hasSpecial = /[!.?@#$%^&*()_+\-=]/.test(value);
			return hasDigit && hasLower && hasUpper && hasSpecial;
		},
		{ message: registerFormMessage.password.valid }
	);

export const registerFormSchema = z
	.object({
		email: z.string().email({ message: registerFormMessage.email.valid }),

		password: passwordSchema,
		repassword: z.string().min(1, { message: registerFormMessage.repassword.require }),
	})
	.superRefine(({ repassword, password }, ctx) => {
		if (repassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: registerFormMessage.repassword.same,
				path: ["rePassword"],
			});
		}
	});
