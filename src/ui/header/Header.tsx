"use client";

import React, { useEffect, useState } from "react";
import { Hero } from "../hero/Hero";
import { Nav } from "./nav/Nav";

export const Header = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;

			setHasScrolled(offset > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<header
				className={`${
					hasScrolled ? "bg-black" : "bg-transparent"
				} text-magenta font-range fixed z-20 w-full text-center shadow-md`}
			>
				<h1
					className={`${
						hasScrolled ? "hidden" : "block"
					} font-range  mb-5 pt-5 text-4xl text-magenta-200 `}
				>
					Beaitco
				</h1>
				<Nav />
			</header>
			<Hero />
		</>
	);
};
