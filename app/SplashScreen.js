"use client";
import SplashIllustration from "../assets/SplashIllustration";
import Link from "next/link";
import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SplashScreen = () => {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		session ? router.replace("dashboard") : null;
	}, [session]);

	return (
		<>
			<SplashIllustration />
			<Logo />
			<div className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-4">
				<p>
					Unlock language treasures, one word at a time. Here, dictionary meets mastery. We turn knowledge into lasting wisdom.
				</p>
				<p className="font-signika text-lg leading-4 pt-2">
					How It Works:
				</p>
				<p className="text-lightPurple ">
					Ready to unlock your language potential? Start by adding any word that sparks your curiosity. Your chosen word becomes your portal, and the app unlocks its depths: meaning, translation, vibrant synonyms, examples and adds it to your vocabulary list.
				</p>
			</div>
			<div className="w-full flex flex-col">
				{/* <Link href="/dashboard">
  <Button variant="contained" className="bg-bgBlue">Dashboard</Button> 
</Link> */}
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
	);
};
export default SplashScreen;
