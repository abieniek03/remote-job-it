import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Poppins } from "next/font/google";

import AOSProvider from "@/hoc/AOSProvider";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
	title: "Remote Job IT",
	description:
		"Aplikacja służąca do publikowania i wyszukiwania ofert pracy w IT. Stworzona w celu nauki, do portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" className="scroll-smooth">
			<Head>
				<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
				<style>
					<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
				</style>
			</Head>
			<body className={`${font.className} text-content overflow-x-hidden`}>
				<AOSProvider>{children}</AOSProvider>
			</body>
		</html>
	);
}
