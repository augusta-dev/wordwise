"use client";
import SplashIllustration from "../assets/SplashIllustration";
import Link from "next/link";
import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
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
	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		session ? router.replace("dashboard") : null;
	}, [session]);

	return (
		<>
			{isMobile && <Mobilesplash />}
			{isDesktop && (
				<div className="w-full px-[3vw]">
					<Navbar splashscreen={true} />
					<Desktopsplash />
				</div>
			)}
		</>
	);
};
export default SplashScreen;
