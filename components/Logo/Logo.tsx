"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface ILogo {
	styles?: string;
}

export default function Logo({ styles }: ILogo) {
	const pathname = usePathname();
	const logoStyles = `relative font-bold ml-3.5 before:absolute before:h-2 before:w-2 before:-left-3.5 before:top-1/2 before:-translate-y-1/2 before:rounded-full ${
		styles === "secondary" ? "text-white before:bg-primary" : "text-primary before:bg-secondary"
	} `;

	if (pathname === "/") {
		return (
			<a href={"#"}>
				<span className={logoStyles}>remoteJobIT</span>
			</a>
		);
	} else {
		return (
			<Link href={"/"}>
				<span className={logoStyles}>remoteJobIT</span>
			</Link>
		);
	}
}
