"use client";

import React from "react";
import clsx from "clsx";
import { Hamburger } from "./mobile/Hamburger";
import { ActiveLink } from "@/shared/active-link/ActiveLink";

export const Nav = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<nav className="hidden w-full justify-center border-y-2 p-5 md:flex">
				<ul className="mr-4 flex justify-between gap-4 text-white">
					{navLinks.map((link) => (
						<li key={link.name} className="scroll-smooth text-xl">
							<ActiveLink className="text-xl" scroll={false} href={`${link.href}`}>
								{link.name}
							</ActiveLink>
						</li>
					))}
				</ul>
				<div className="border-l-2" />
				<ul className="ml-4 flex gap-4 text-xl text-white">
					<ActiveLink className="text-xl" href={`/visit`}>
						{"UMÓW WIZYTĘ"}
					</ActiveLink>
					<ActiveLink className="text-xl" href={`/visist`}>
						{"KUP VOUCHER"}
					</ActiveLink>
				</ul>
			</nav>
			<nav className="relative flex  flex-col justify-between  md:hidden">
				<div className={clsx("flex justify-between", open && "bg-black")}>
					<h1 className={"text-2xl text-gray-100"}>Beaitco</h1>
					<Hamburger onClick={() => setOpen((prev) => !prev)} open={open} />
				</div>
				<div
					className={clsx(
						"w-full translate-x-full  bg-slate-600 transition-transform",
						open && "translate-x-[0px]",
					)}
				>
					<div className="h-screen">
						<button onClick={() => setOpen(false)}>x</button>
						<ul className="mr-4 flex flex-col justify-between gap-4 text-white">
							{navLinks.map((link) => (
								<li key={link.name} className="scroll-smooth text-xl">
									<ActiveLink scroll={false} href={`${link.href}`}>
										{link.name}
									</ActiveLink>
								</li>
							))}
						</ul>
						<div className="border-l-2" />
						<ul className="ml-4 flex flex-col  gap-4 text-xl text-white">
							<ActiveLink href={`/visit`}>{"UMÓW WIZYTĘ"}</ActiveLink>
							<ActiveLink href={`/visist`}>{"KUP VOUCHER"}</ActiveLink>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

const navLinks = [
	{
		name: "ZABIEGI",
		href: "/#zabiegi",
	},
	{
		name: "NASZE KOSMETYCZKI",
		href: "/#nasze-kosmetyczki",
	},
	{
		name: "CENNIK",
		href: "/#cennik",
	},
	{
		name: "O NAS",
		href: "/#o-nas",
	},
	{
		name: "KONTAKT",
		href: "/#kontakt",
	},
];
