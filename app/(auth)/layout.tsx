import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" className="scroll-smooth">
			<body>
				<main className="h-screen w-full flex flex-col justify-center items-center px-4">
					<Link href="/" className="absolute top-5 left-5 text-primary p-2 text-3xl">
						<FiArrowLeft className="hover:text-secondary transition-text duration-300" />
					</Link>
					{children}
				</main>
			</body>
		</html>
	);
}
