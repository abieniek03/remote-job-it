import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Remote Job IT",
	description:
		"Aplikacja służąca do publikowania i wyszukiwania ofert pracy w IT. Stworzona w celu nauki, do portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={font.className}>{children}</body>
		</html>
	);
}
