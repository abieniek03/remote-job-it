import Image from "next/image";

interface ISpacialistItem {
	image: any;
	title: string;
	description: string;
}

export default function SpecialistItem({ image, title, description }: ISpacialistItem) {
	return (
		<div
			className="relative bg-white w-full overflow-hidden rounded-xl flex flex-col border shadow-lg"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<Image src={image} alt="" className="h-72 w-full object-cover" />
			<div className=" w-full top-0 left-0 flex flex-col justify-center">
				<div className="p-8">
					<p className="font-bold text-2xl mb-4">{title}</p>
					<p className="text-sm">{description}</p>
				</div>
			</div>
		</div>
	);
}
