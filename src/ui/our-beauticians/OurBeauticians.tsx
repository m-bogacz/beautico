import Image from "next/image";
import React from "react";

export const OurBeauticians = () => {
	return (
		<article
			id="nasze-kosmetyczki"
			className="relative z-10 flex h-screen translate-y-10 flex-col items-center rounded-t-[100px] bg-[#ECEDF4]"
		>
			<h3 className="my-28 text-8xl text-magenta-200">Nasze Kosmetyczki</h3>
			<article className="mx-40">
				<section className="flex h-96">
					<div>
						<Image src={"/img/hero.jpg"} alt="beatiu" width={320} height={720} />
					</div>
					<section>
						<p className="text-4xl">Magdalena Nowak - Mistrzyni Złotej Dłoni</p>
						<p className="text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga dolorem officiis,
							fugit delectus ipsam assumenda amet voluptatum alias, iste eius natus! Soluta rerum
							corporis ipsam est ut, culpa perferendis?
						</p>
					</section>
				</section>
			</article>
		</article>
	);
};
