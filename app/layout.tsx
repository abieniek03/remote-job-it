import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";

import AOSProvider from "@/hoc/AOSProvider";
import ReduxProvider from "@/hoc/ReduxProvider";
import Authentication from "@/hoc/Authentication";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
	title: "Remote Job IT",
	description:
		"Aplikacja służąca do publikowania i wyszukiwania ofert pracy w IT. Stworzona w celu nauki, do portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();
	const token = cookieStore.get("auth-token")?.value;

	return (
		<html lang="pl" className="scroll-smooth">
			<body className={`${font.className} text-content overflow-x-hidden`}>
				<AOSProvider>
					<ReduxProvider>
						<Authentication token={token}>{children}</Authentication>
					</ReduxProvider>
				</AOSProvider>
			</body>
		</html>
	);
}
