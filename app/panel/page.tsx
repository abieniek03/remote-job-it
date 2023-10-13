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
		<main>
			<div className="h-screen flex flex-col justify-center items-center">
				<h1>Siema</h1>
				<p>{userData?.email}</p>
				<Button label="Wyloguj się" onClick={handleLogout} />
			</div>
		</main>
	);
}
