"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mockup from "../../assets/iPhone.png";

export default function Desktopsplash() {
	//Mouseover over mouseenter
	const [mousePosition, setMousePosition] = useState({
		signin: false,
		signup: false,
	});
	return (
		<div className="w-full flex -mb-4  h-[90vh]">
			<section className="w-2/5 flex flex-col justify-center align-middle">
				<h2 className="font-signika text-[3.7vw] leading-[3.5vw] font-semibold">
					We are your language learning pal
				</h2>
				<h3 className="font-signika text-[2.5vw] font-semibold">
					How It Works:{" "}
				</h3>
				<p className="leading-[1.5vw] pr-2 text-[1vw] font-medium">
					Open the door to language mastery! Just insert a word that
					catches your attention. The app returns its definition,
					translations and synonyms. This way, every word becomes a
					stepping stone on your linguistic adventure.
				</p>
				<div className="flex justify-between w-full  text-center align-middle gap-1 font-signika font-medium text-xl text-white mt-2">
					<Link
						href="/signin "
						className={`${
							mousePosition.signin &&
							"hover:-translate-y-1 hover:scale-110 hover:bg-blue"
						} ${
							mousePosition.signup && "translate-y-0  scale-75"
						}  w-[45%] bg-bgBlue h-[4.5vw] mt-[7px] flex 
								 items-center rounded-lg  duration-200`}
					>
						<button
							className="w-full text-center "
							onMouseOver={() =>
								setMousePosition({
									...mousePosition,
									signin: true,
								})
							}
							onMouseLeave={() =>
								setMousePosition({
									...mousePosition,
									signin: false,
								})
							}
						>
							Signin
						</button>
					</Link>
					<Link
						href="/signup"
						className={`${
							mousePosition.signin && "translate-y-0  scale-75"
						} w-[55%] bg-lightPurple h-[5.5vw] rounded-lg flex hover:-translate-y-1 hover:scale-110 hover:bg-purpleBody duration-200`}
					>
						<button
							className="w-full text-center self-center"
							onMouseOver={() =>
								setMousePosition({
									...mousePosition,
									signup: true,
								})
							}
							onMouseLeave={() =>
								setMousePosition({
									...mousePosition,
									signup: false,
								})
							}
						>
							Signup
						</button>
					</Link>
				</div>
			</section>
			<section className="max-w-[54%]  pl-[2vw] mt-8">
				<Image
					src={Mockup}
					className="h-full"
					alt="mockup"
				/>
			</section>
		</div>
	);
}
