import type { Metadata } from "next";
import { Ranga, Montserrat } from "next/font/google";
import "./globals.css";

const ranga = Ranga({
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-ranga",
	subsets: ["latin"],
});
const montserrat = Montserrat({
	weight: ["400", "700"],
	display: "swap",
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${ranga.variable}, ${montserrat.variable}`}>{children}</body>
		</html>
	);
}
