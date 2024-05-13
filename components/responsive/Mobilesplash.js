"use client";
import React from "react";
import Link from "next/link";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import Image from "next/image";
import arrow from "../../assets/arrow_legs.svg";
import SizeContext from "./SizeContext";
import splash from "../../assets/splash tablet.svg";
import splashMobile from "../../assets/splashmobile.png";

export default function Mobilesplash() {
	const sizeCtx = React.useContext(SizeContext);
	const tablet = sizeCtx.tablet;

	return (
		<>
			<div className="flex pb-2 flex-col items-end w-full">
				<Link
					className="flex"
					href="/dashboard"
				>
					<p className={`${tablet && "font-medium"}`}>
						Continue to dashboard
					</p>
					<Image
						src={arrow}
						className="ml-2 mt-1 h-4 w-auto animate-bounce"
						alt="arrow"
					/>
				</Link>
			</div>
			{!tablet && (
				<Image
					src={splashMobile}
					className="w-full h-auto"
				/>
			)}
			{tablet && (
				<Image
					src={splash}
					className="w-full px-4 -ml-2 -mb-4"
				></Image>
			)}
			<Logo />
			<div
				className={`${
					tablet && "font-medium text-[17px]"
				}  font-rubik font-semibold text-darkPurple text-justify leading-5 pb-4`}
			>
				<p>
					Unlock language treasures, one word at a time. Here,
					dictionary meets mastery. We turn knowledge into lasting
					wisdom.
				</p>
				<p
					className={`${
						tablet && "text-xl pb-2"
					} font-signika text-lg leading-4 pt-2`}
				>
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
						className={`${tablet && "py-2 mb-1"} !mt-4 mb-2`}
					>
						Sign in
					</Button>
				</Link>
				<Link href="/signup">
					<Button
						variant="contained"
						className={`${tablet && "py-2 !mt-1"}  mb-2`}
					>
						Sign up
					</Button>
				</Link>
			</div>
		</>
	);
}
