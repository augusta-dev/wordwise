"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import SizeProvider from "../components/responsive/SizeProvider";
import Responsive from "../components/responsive/Responsive";

function Providers(props) {
	return (
		<SessionProvider>
			<SizeProvider>
				<Responsive>{props.children}</Responsive>
			</SizeProvider>
		</SessionProvider>
	);
}

export default Providers;
