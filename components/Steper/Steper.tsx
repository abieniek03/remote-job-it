import { LiaHandPointRightSolid } from "react-icons/lia";

interface Steper {
	step: number;
	title: string;
	description: string;
}

export default function Steper({ step, title, description }: Steper) {
	return (
		<div className="relative w-full flex flex-col md:flex-row md:items-center">
			<span className="font-bold text-6xl mb-2 md:mb-0 md:mr-4 w-full max-w-[80px]">
				{step < 9 ? `0${step}` : step}
			</span>
			<div>
				<div className="inline-flex">
					<LiaHandPointRightSolid className="text-3xl text-primary mr-3" />
					<h3 className="font-bold text-2xl text-primary">{title}</h3>
				</div>
				<p className="mr-10 text-sm sm:text-base">{description}</p>
			</div>
		</div>
	);
}
