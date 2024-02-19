"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import SizeProvider from '../components/responsive/SizeProvider';

function Providers(props) {
	return (
		<SessionProvider>
			<SizeProvider>{props.children}</SizeProvider>
		</SessionProvider>
	);
}

export default Providers;
