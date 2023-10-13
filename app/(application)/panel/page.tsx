"use client";

import Button from "@/components/Button/Button";

import { useAppSelector } from "@/store/store";

import axios from "axios";

export default function HelloPage() {
	function handleLogout() {
		axios.get("/api/auth/logout").then(() => (window.location.href = "/"));
	}

	const userData = useAppSelector((store: any) => store.user.details?.user);

	return (
		<div className="mt-24 flex flex-col justify-center items-center">
			<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Witaj na naszym portalu!</h1>
		</div>
	);
}
