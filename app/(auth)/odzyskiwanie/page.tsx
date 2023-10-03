"use client";

import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { loginFormSchema } from "@/validation/login/schema";

export default function RecoveryPage() {
	const form = useForm<{ email: string }>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: { email: "" },
		mode: "onSubmit",
		reValidateMode: "onChange",
	});

	function handleRecovery(data: { email: string }) {
		console.log(data);
	}

	return (
		<>
			<div className="text-center font-bold mb-8 max-w-2xl">
				<h1 className="text-primary text-4xl mb-2">Odzyskaj swoje konto!</h1>
				<p>
					Podaj adres mailowy na który Twoje konto zostało zarejestrowane. Wyślemy&nbsp;wiadomość, dzięki której
					ustawisz nowe hasło.
				</p>
			</div>
			<div className="w-full max-w-sm">
				<FormProvider {...form}>
					<form className="w-full max-w-sm" onSubmit={form.handleSubmit(handleRecovery)}>
						<FormInput type="email" id="email" label="Adres mailowy" />
						<Button label="Odzyskaj konto" wFull={true} />
					</form>
				</FormProvider>
			</div>
		</>
	);
}
