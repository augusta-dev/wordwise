"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/layout/Navbar";
import Desktopsplash from "../components/responsive/Desktopsplash";
import Mobilesplash from "../components/responsive/Mobilesplash";
import SizeContext from "../components/responsive/SizeContext";
import Responsive from "../components/responsive/Responsive";
const SplashScreen = () => {
	const sizeCtx = React.useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;
	//if the value of a variable is going to change after rendering, use  a react hook to execute that change

	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		session ? router.replace("dashboard") : null;
	}, [session]);

	return (
		<Responsive>
			{mobile && <Mobilesplash />}
			{tablet && <Mobilesplash />}
			{desktop && (
				<div className="w-full px-[3vw]">
					<Navbar about={true} />
					<Desktopsplash />
				</div>
			)}
		</Responsive>
	);
};
export default SplashScreen;
