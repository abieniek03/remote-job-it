"use client";

import { useState } from "react";
import Link from "next/link";

import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { IRegisterForm } from "@/validation/register/types";
import { defaultRegisterForm } from "@/validation/register/default";
import { registerFormSchema } from "@/validation/register/schema";

import axios from "axios";

export default function RegisterPage() {
	const [loading, setLoading] = useState<boolean>(false);

	const form = useForm<IRegisterForm>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: defaultRegisterForm,
		mode: "onSubmit",
		reValidateMode: "onChange",
	});

	async function handleRegister(data: IRegisterForm) {
		console.log("Dane formularza logowania:");
		console.log(data);

		try {
			setLoading(true);
			const response = await axios.post("/api/auth/register", data);
			console.log("Register success", response.data);
		} catch (error: any) {
			console.log("Register failed", error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<div className="text-center font-bold mb-8">
				<h1 className="text-primary text-4xl mb-2">Dołącz do naszej społeczności</h1>
				<p>Załóż swoje konto wypełniając formularz.</p>
			</div>
			<div className="w-full max-w-sm">
				<FormProvider {...form}>
					<form className="w-full max-w-sm" onSubmit={form.handleSubmit(handleRegister)}>
						<FormInput type="email" id="email" label="Adres mailowy" />
						<FormInput type="password" id="password" label="Hasło" />
						<FormInput type="password" id="rePassword" label="Powtórz hasło" />
						<Button label="Zarejestruj się" wFull={true} loading={loading} loadingLabel="Rejestracja..." />
					</form>
				</FormProvider>
				<hr className="mt-8 mb-6 border-neutral-300" />
				<Link href="/logowanie" className=" block text-center hover:underline">
					Masz już konto? <span className="font-bold">Zaloguj się.</span>
				</Link>
			</div>
		</>
	);
}
