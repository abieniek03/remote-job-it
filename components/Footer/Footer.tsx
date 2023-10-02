import Image from "next/image";
import Logo from "../Logo/Logo";
import myLogo from "@/assets/images/ab-white-logo.svg";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-secondary text-white p-4">
			<div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-8">
				<Logo styles="secondary" />
				<div className="my-4 text-center">
					<p className="uppercase text-xs">Projekt stworzony w celu nauki i praktyki.</p>
					<p className="text-sm">&copy; {currentYear}</p>
				</div>
				<a href="https://abwebproject.com/" target="_blank" className="p-2">
					<Image src={myLogo} alt="AB Web Project" className="w-10" />
				</a>
			</div>
		</footer>
	);
}
