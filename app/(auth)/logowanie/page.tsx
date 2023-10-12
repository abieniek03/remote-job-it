"use client";

import { useState } from "react";
import Link from "next/link";

import Alert from "@/components/Alert/Alert";
import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { ILoginForm } from "@/validation/login/types";
import { defaultLoginForm } from "@/validation/login/default";
import { loginFormSchema } from "@/validation/login/schema";

import axios from "axios";

export default function LoginPage() {
	const [loading, setLoading] = useState<boolean>(false);
	const [errorAlert, setErrorAlert] = useState<string>("");

	const form = useForm<ILoginForm>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: defaultLoginForm,
		mode: "onSubmit",
		reValidateMode: "onChange",
	});

	async function handleLogin(data: ILoginForm) {
		setErrorAlert("");

		try {
			setLoading(true);
			await axios.post("/api/auth/login", data);
			window.location.href = "/panel";
		} catch (error: any) {
			setLoading(false);
			if (error.response.data.message) {
				setErrorAlert("Nie poprawne dane logowania.");
			}
		}
	}

	return (
		<>
			<div className="text-center font-bold mb-8">
				<h1 className="text-primary text-4xl mb-2">Witaj ponownie!</h1>
				<p>Zaloguj się do swojego konta, aby kontynuować.</p>
			</div>
			<div className="w-full max-w-sm">
				{errorAlert !== "" && <Alert type="error" info={errorAlert} />}
				<FormProvider {...form}>
					<form className="w-full max-w-sm" onSubmit={form.handleSubmit(handleLogin)}>
						<FormInput type="email" id="email" label="Adres mailowy" />
						<FormInput type="password" id="password" label="Hasło" />
						<Button label="Zaloguj" wFull={true} loading={loading} loadingLabel="Logowanie..." />
					</form>
				</FormProvider>
				<hr className="mt-8 mb-6 border-neutral-300" />
				<Link href="/rejestracja" className=" block text-center hover:underline">
					Nie masz jeszcze konta? <span className="font-bold">Zarejestruj się.</span>
				</Link>
			</div>
		</>
	);
}
