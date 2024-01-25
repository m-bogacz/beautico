import { Header } from "@/ui/header/Header";

import { OurBeauticians } from "@/ui/our-beauticians/OurBeauticians";
import { Treatments } from "@/ui/treatments/Treatments";

export default function Home() {
	return (
		<section className="z-10">
			<Header />
			<Treatments />
			<OurBeauticians />
		</section>
	);
}
