import "./globals.css";
import React from "react";
import { StyledEngineProvider } from "@mui/material";
import "tailwindcss/tailwind.css";
import localFont from "next/font/local";
import Background from "@/components/layout/Background";
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
		<div className={`${rubik.variable} ${signikaNegative.variable} ${squadaOne.variable}`}>
			<StyledEngineProvider injectFirst>
				<Background>{children}</Background>
			</StyledEngineProvider>
		</div>

		// </React.StrictMode>
	);
}
