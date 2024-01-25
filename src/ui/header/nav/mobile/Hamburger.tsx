import clsx from "clsx";
import React from "react";

export const Hamburger2 = ({ onClick }: { onClick: () => void }) => {
	return (
		<button onClick={onClick} className="group relative">
			<div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden   ring-opacity-30 transition-all duration-200">
				<div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
					<div className="h-[2px] w-7 origin-left transform bg-white transition-all duration-300 group-focus:translate-x-10"></div>
					<div className="h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 group-focus:translate-x-10"></div>
					<div className="h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 group-focus:translate-x-10"></div>
					<div className="absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-focus:w-12 group-focus:translate-x-0">
						<div className="absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:rotate-45"></div>
						<div className="absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 group-focus:-rotate-45"></div>
					</div>
				</div>
			</div>
		</button>
	);
};

export const Hamburger = ({ onClick, open }: { onClick: () => void; open: boolean }) => {
	return (
		<button className="space-y-1" onClick={onClick}>
			<span
				className={clsx(
					"block h-[2px] w-4 bg-gray-600 transition duration-300 ease-in-out",
					open && "translate-y-1.5 rotate-45",
				)}
			></span>
			<span
				className={clsx(
					"block h-[2px] w-4 bg-gray-600 transition duration-300 ease-in-out",
					open && "opacity-0",
				)}
			></span>
			<span
				className={clsx(
					"block h-[2px] w-4 bg-gray-600 transition duration-300 ease-in-out",
					open && "-translate-y-1.5 -rotate-45",
				)}
			></span>
		</button>
	);
};
