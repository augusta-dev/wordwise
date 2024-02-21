'use client'
import React from "react";
import SplashIllustration from "../../assets/SplashIllustration";
import Link from "next/link";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import Image from "next/image";
import arrow from "../../assets/arrow_legs.svg";

export default function Mobilesplash() {
	return (
		<>
			<div className="flex pb-2 flex-col items-end w-full">
				<Link className="flex" href='/dashboard'>
					<p>Continue to dashboard</p>
					<Image
						src={arrow} 
						className="ml-2 mt-1 h-4 w-auto animate-bounce"
						alt="arrow"
					/>
				</Link>
			</div>
			<SplashIllustration />
			<Logo />
			<div className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-4">
				<p>
					Unlock language treasures, one word at a time. Here,
					dictionary meets mastery. We turn knowledge into lasting
					wisdom.
				</p>
				<p className="font-signika text-lg leading-4 pt-2">
					How It Works:
				</p>
				<p className="text-lightPurple ">
					Ready to unlock your language potential? Start by adding any
					word that sparks your curiosity. Your chosen word becomes
					your portal, and the app unlocks its depths: meaning,
					translation, vibrant synonyms, examples and, adds it to your
					vocabulary list.
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
	);
}
