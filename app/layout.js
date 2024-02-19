import "./globals.css";
import React from "react";
import "tailwindcss/tailwind.css";
import localFont from "next/font/local";
import Background from "../components/layout/Background";
import Providers from "./Providers";

const rubik = localFont({
	src: [
		{
			path: "../assets/Fonts/Rubik/Rubik-VariableFont_wght.ttf",
		},
	],
	variable: "--font-rubik",
});
const signikaNegative = localFont({
	src: [
		{
			path: "../assets/Fonts/Signika_Negative/SignikaNegative-VariableFont_wght.ttf",
		},
	],
	variable: "--font-signika-negative",
});
const squadaOne = localFont({
	src: [
		{
			path: "../assets/Fonts/Squada_One/SquadaOne-Regular.ttf",
		},
	],
	variable: "--font-squada-one",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main>
					<div
						className={`${rubik.variable} ${signikaNegative.variable} ${squadaOne.variable}`}
					>
						<Providers>
							{/* <Responsive /> */}
							<Background>{children}</Background>
						</Providers>
					</div>
				</main>
			</body>
		</html>
	);
}
