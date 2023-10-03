import Image from "next/image";
import headerImage from "@/assets/images/header.jpg";

import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import SpecialistItem from "@/components/SpecialistItem/SpecialistItem";
import Steper from "@/components/Steper/Steper";

import programmerImg from "@/assets/images/programmer.jpg";
import uxImg from "@/assets/images/ux.jpg";
import graphicImg from "@/assets/images/graphic.jpg";
import Footer from "@/components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<header className="lg:mt-10 overflow-hidden">
				<div className="w-full sm:flex sm:justify-between sm:items-center max-w-8xl mx-auto sm:p-8 sm:gap-5 max-w-[1400px] mb-20 sm:mb-0">
					<div className="mt-10 sm:mt-0 p-2 sm:p-0 text-center sm:text-left max-w-xl lg:max-w-2xl animate-header-text">
						<h1 className="font-bold text-4xl text-secondary px-4 sm:p-0 mb-2 lg:mb-4 md:text-5xl lg:text-6xl">
							Znajdź wymarzoną pracę&nbsp;w&nbsp;branży IT
						</h1>
						<p className="lg:text-xl mb-4">
							Oferty dla specjalistów w wielu dziedzinach. Na&nbsp;różnym etapie&nbsp;doświadczenia.
						</p>
						<Button label="Szukaj ofert 🔍" />
					</div>
					<div className="mt-16 sm:mt-0 relative px-16 py-8 sm:p-0 before:absolute before:h-1/2 before:w-1/2 before:bg-secondary before:top-0 before:left-0 sm:top-4 md:top-0 before:rotate-45 before:rounded-xl after:absolute after:h-1/2 after:w-1/2 after:bg-primary after:-bottom-0 after:-right-5 after:rotate-45 after:rounded-xl sm:after:right-0 md:mr-4 lg:mr-8 xl:mr-20 opacity-0 animate-header-image">
						<Image src={headerImage} alt="" className="relative rounded-xl w-full mx-auto max-w-sm z-10" />
					</div>
				</div>
			</header>
			<main className="mt-24">
				<section className="px-8 py-16 mb-16 bg-neutral-50">
					<div className="max-w-[1400px] mx-auto">
						<h2 className="font-medium text-3xl text-primary text-center mb-8">Poszukiwani specjaliści</h2>
						<div className="flex flex-col lg:flex-row gap-5 lg:justify-between ">
							<SpecialistItem
								image={programmerImg}
								title="Programiści"
								description="Frontend, backend oraz mobile developerzy. W wielu firmach wciąż brakuje specjalistów w na tych stanowiskach."
							/>
							<SpecialistItem
								image={uxImg}
								title="UI/UX Designerzy"
								description="Projektanci systemów, portali, stron internetowych i aplikacji mobilnych są poszukiwani w wielu zespołach. "
							/>
							<SpecialistItem
								image={graphicImg}
								title="Graficy"
								description="Zapotrzebowanie na grafików jest równie duże, jak na twórców stron internetowych"
							/>
						</div>
					</div>
				</section>
				<div className="max-w-[1400px] mx-auto">
					<section className="px-8 py-16 mb-16">
						<div className="w-full max-w-md">
							<h2 className="text-5xl text-secondary mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								Praca czeka na
								<br />
								<span className="font-bold  text-7xl">
									<span className="text-primary">Ciebie</span>.
								</span>
							</h2>
							<p className="text-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
								Nie czekaj. Zgłoś się już dziś!
							</p>
						</div>

						<div className="mt-8 flex justify-end">
							<div className="w-full max-w-3xl">
								<div className="flex flex-col gap-20">
									<Steper
										step={1}
										title="Zarejestruj się"
										description="Dołącz do społeczności naszego portalu. Załóż swoje konto."
									/>
									<Steper
										step={2}
										title="Wyszukaj ofertę dla siebie"
										description="Korzystając z naszej wyszukiwarki zaznacz opcje, które Ciebie dotyczą. Dzięki temu łatwiej i szybciej znajdziesz odpowiednia dla siebie ofertę."
									/>
									<Steper
										step={3}
										title="Aplikuj na wybrane stanowisko"
										description="Umożliwiamy łatwe aplikowanie poprzez wypełnienie formularza."
									/>
								</div>
								<div className="flex justify-center items-centet mt-16" data-aos="fade-right">
									<Button label="Załóż konto" path="/rejestracja" />
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
