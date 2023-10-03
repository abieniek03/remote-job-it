import Link from "next/link";

interface IButton {
	label: string;
	styles?: string;
	path?: string;
	wFull?: boolean;
}

const stylePrimary = "bg-primary hover:bg-primary-hover shadow-primary-shadow";
const styleSecondary = "bg-secondary hover:bg-secondary-hover shadow-secondary-hover";

export default function Button({ label, styles, path, wFull }: IButton) {
	const buttonStyles = `text-white font-bold px-5 py-2.5 rounded-lg cursor-pointer shadow-md transition-bg duration-300 ${
		wFull && "w-full"
	} ${styles === "secondary" ? styleSecondary : stylePrimary}`;

	if (path) {
		return (
			<Link href={path} className={buttonStyles}>
				{label}
			</Link>
		);
	}

	return <button className={buttonStyles}>{label}</button>;
}
