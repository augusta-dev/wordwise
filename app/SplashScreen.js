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
import Image from "next/image";
import Mockup from "../assets/iPhone.png";
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
			{isMobile && (
				<>
					<SplashIllustration />
					<Logo />
					<div className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-4">
						<p>
							Unlock language treasures, one word at a time. Here,
							dictionary meets mastery. We turn knowledge into
							lasting wisdom.
						</p>
						<p className="font-signika text-lg leading-4 pt-2">
							How It Works:
						</p>
						<p className="text-lightPurple ">
							Ready to unlock your language potential? Start by
							adding any word that sparks your curiosity. Your
							chosen word becomes your portal, and the app unlocks
							its depths: meaning, translation, vibrant synonyms,
							examples and, adds it to your vocabulary list.
						</p>
					</div>
					<div className="w-full flex flex-col">
						<Link href="/signin">
							<Button
								variant="contained"
								className="!mt-4 mb-2"
							>
								Sign in
							</Button>
						</Link>
						<Link href="/signup">
							<Button
								variant="contained"
								className="mt-2"
							>
								Sign up
							</Button>
						</Link>
					</div>
				</>
			)}
			{isDesktop && (
				<>
					<Navbar splashscreen={true} />
					<div className="w-full flex -mb-4  h-[90vh]">
						<section className="w-2/5 flex flex-col justify-center align-middle">
							<h2 className="font-signika text-[4vw] leading-[3.5vw] font-semibold">
								We are your language learning pal
							</h2>
							<h3 className="font-signika text-[2.5vw] font-semibold">
								How It Works:{" "}
							</h3>
							<p className="leading-[1.5vw] pr-2 text-[1vw] font-medium">
								Open the door to language mastery! Just insert a
								word that catches your attention. The app
								returns its definition, translations and
								synonyms. This way, every word becomes a
								stepping stone on your linguistic adventure.
							</p>
							<div className="flex justify-between w-full  text-center align-middle gap-1 font-signika font-medium text-xl text-white mt-2">
								<Link href='/signin ' className="w-[45%] bg-bgBlue h-[4.5vw] mt-[7px] flex 
								 items-center rounded-lg">
									<button className="w-full text-center ">Signin</button>
								</Link>
								<Link href='/signup' className="w-[55%] bg-lightPurple h-[5.5vw] rounded-lg flex">
									<button className="w-full text-center self-center">Signup</button>
								</Link>
							</div>
						</section>
						<section className="max-w-[54%]  ml-4 mt-8">
							<Image
								src={Mockup}
								className="h-full"
								alt='mockup'
							/>
						</section>
					</div>
				</>
			)}
		</>
	);
};
export default SplashScreen;
