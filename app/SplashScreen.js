"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/layout/Navbar";
import Desktopsplash from "../components/responsive/Desktopsplash";
import Mobilesplash from "../components/responsive/Mobilesplash";

const SplashScreen = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);

	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [tablet, setTablet] = useState(false);

	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

	useEffect(() => {
		isMobile ? setMobile(true) : setMobile(false);
	}, [isMobile]);

	useEffect(() => {
		isTablet ? setTablet(true) : setTablet(false);
	}, [isTablet]);
	//if the value of a variable is going to change after rendering, use  a react hook to execute that change

	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		session ? router.replace("dashboard") : null;
	}, [session]);

	return (
		<>
			{mobile && <Mobilesplash />}
			{tablet && <Mobilesplash />}
			{isDesktop && (
				<div className="w-full px-[3vw]">
					<Navbar about={true} />
					<Desktopsplash />
				</div>
			)}
		</>
	);
};
export default SplashScreen;
