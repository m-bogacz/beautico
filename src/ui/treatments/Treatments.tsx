import React from "react";
import Image from "next/image";
import clsx from "clsx";

export const Treatments = () => {
	return (
		<section
			id="zabiegi"
			className=" relative z-10 flex h-screen flex-col items-center justify-around"
		>
			<h3 className="my-10 text-8xl text-magenta-200">Nasze Zabiegi</h3>
			<div>
				<section className="grid grid-cols-1 justify-items-center text-right md:grid-cols-3 md:gap-40">
					{icons.map(({ icon, name, className }, index) => (
						<SectionIcon className={clsx(className)} key={index}>
							<div className="flex flex-col items-center justify-center">
								<Image priority src={icon} height={52} width={52} alt="Follow us on Twitter" />
								<p className="text-3xl underline underline-offset-8">{name}</p>
							</div>
						</SectionIcon>
					))}
				</section>
			</div>
		</section>
	);
};

const SectionIcon = ({
	children,
	className,
}: {
	readonly children: React.ReactNode;
	className?: string;
}) => {
	return <div className={className}>{children}</div>;
};

const icons = [
	{
		icon: "/icons/face.svg",
		name: "Twarz",
		className: "col-span-1",
	},
	{
		icon: "/icons/abdominal.svg",
		name: "Ciało",
		className: "col-span-1",
	},
	{
		icon: "/icons/holding-hands.svg",
		name: "Dłonie",
		className: "col-span-1",
	},
	{
		icon: "/icons/baby-feet.svg",
		name: "Stopy",
		className: "col-span-1",
	},
	{
		icon: "/icons/grinning-face.svg",
		name: "Mężczyźni",
		className: "col-span-1 ",
	},
	{
		icon: "/icons/razor.svg",
		name: "Depilacja",
		className: "col-span-1",
	},
	{
		icon: "/icons/eyebrow.svg",
		name: "Oczy",
		className: "col-span-1 md:ml-20",
	},
	{
		icon: "/icons/pregnant-women.svg",
		name: "Ciąża",
		className: "col-span-1 md:col-end-4 md:mr-20",
	},
];
