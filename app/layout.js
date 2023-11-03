import "./globals.css";
import React from "react";
// import { StyledEngineProvider } from "@mui/material";
import "tailwindcss/tailwind.css";
import localFont from "next/font/local";
import Background from "../components/layout/Background";
import Providers from "./Providers";
import getServerSideProps from "../components/WordList/listProps";
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
		// <React.StrictMode>
		<html lang="en">
			<body>
				<main>
					<div
						className={`${rubik.variable} ${signikaNegative.variable} ${squadaOne.variable}`}
					>
						{/* <StyledEngineProvider injectFirst> */}
						<Providers>
							<Background>{children}</Background>
						</Providers>
						{/* </StyledEngineProvider> */}
					</div>
				</main>
			</body>
		</html>

		// </React.StrictMode>
	);
}
