"use client";

import Link from "next/link";

import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { ILoginForm } from "@/validation/login/types";
import { defaultLoginForm } from "@/validation/login/default";
import { loginFormSchema } from "@/validation/login/schema";

export default function LoginPage() {
	const form = useForm<ILoginForm>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: defaultLoginForm,
		mode: "onSubmit",
		reValidateMode: "onChange",
	});

	function handleLogin(data: ILoginForm) {
		console.log("Dane formularza logowania:");
		console.log(data);
	}

	return (
		<>
			<div className="text-center font-bold mb-8">
				<h1 className="text-primary text-4xl mb-2">Witaj ponownie!</h1>
				<p>Zaloguj się do swojego konta, aby kontynuować.</p>
			</div>
			<div className="w-full max-w-sm">
				<FormProvider {...form}>
					<form className="w-full max-w-sm" onSubmit={form.handleSubmit(handleLogin)}>
						<FormInput type="email" id="email" label="Adres mailowy" />
						<FormInput type="password" id="password" label="Hasło" />
						<div className="flex justify-between items-center">
							<Link href={"/odzyskiwanie"} className="text-primary text-sm hover:underline">
								Nie pamiętam hasła{" "}
							</Link>
							<Button label="Zaloguj" />
						</div>
					</form>
				</FormProvider>
				<hr className="mt-8 mb-6 border-neutral-300" />
				<Link href="/logowanie" className=" block text-center hover:underline">
					Nie masz jeszcze konta? <span className="font-bold">Zarejestruj się.</span>
				</Link>
			</div>
		</>
	);
}
