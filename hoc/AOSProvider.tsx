"use client";

import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			startEvent: "DOMContentLoaded",
		});
	}, []);

	return <>{children}</>;
}
