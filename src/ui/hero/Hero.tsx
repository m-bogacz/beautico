import React from "react";
import Image from "next/image";

export const Hero = () => {
	return (
		<section className={"relative flex  items-center justify-center"}>
			{heroSection.map((section) => (
				<>
					<Image
						className={"z-[-1] bg-cover"}
						priority
						src={section.bg_image_url}
						fill
						alt="hero image example"
					/>

					<div
						className={
							"mx-2 flex h-screen max-w-sm flex-col items-center justify-center gap-3 text-white md:mx-5 md:max-w-max"
						}
					>
						<h2 className="lg:text- text-center text-4xl md:text-5xl">{section.title}</h2>
						<p className="max-w-sm text-center text-xs font-thin leading-7 md:max-w-2xl">
							{section.description}
						</p>
					</div>
				</>
			))}
		</section>
	);
};

const heroSection = [
	{
		bg_image_url: "/img/hero.jpg",
		title: "Poznaj nasze zabiegi na twarz",
		description:
			"Odkryj tajniki piękna! Poznaj nasze wyjątkowe zabiegi na twarz, stworzone specjalnie dla Ciebie. Zrelaksuj się i odśwież swoją skórę w naszym ekskluzywnym salonie urody.",
	},
];
