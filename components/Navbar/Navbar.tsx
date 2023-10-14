"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Logo from "../Logo/Logo";
import UserButton from "./UserButton";

import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import { useAppSelector } from "@/store/store";

const navButtonStyles = "text-sm font-bold px-5 py-2.5 rounded-lg cursor-pointer shadow-md transition-bg duration-300";

export default function Navbar() {
	const [mounted, setMoundned] = useState<boolean>(false);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

	function toggleMenu() {
		setIsOpenMenu(!isOpenMenu);
	}

	const store = useAppSelector((store) => store);
	const user = store.user.details;

	useEffect(() => {
		setMoundned(true);
	}, []);

	return (
		<nav className="py-4">
			<div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
				<Logo />

				{mounted && (
					<div>
						{user?.verify ? (
							<UserButton email={user.user?.email} />
						) : (
							<>
								<button className="text-3xl sm:hidden" onClick={toggleMenu}>
									{isOpenMenu ? <IoClose /> : <BiMenu />}
								</button>
								<div
									className={`${
										isOpenMenu ? "flex flex-col bg-white absolute top-[62px] left-0 p-4 w-full" : "hidden"
									} sm:flex gap-5`}
								>
									<Link
										href={"/logowanie"}
										className={`${navButtonStyles}  bg-neutral-50 text-primary hover:bg-neutral-100`}
									>
										Zaloguj się
									</Link>
									<Link
										href={"/rejestracja"}
										className={`${navButtonStyles} bg-primary hover:bg-primary-hover text-white`}
									>
										Zarejestruj się
									</Link>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</nav>
	);
}
