'use client'
import SplashIllustration from "../assets/SplashIllustration";
import Link from 'next/link';
import Button from "../components/UI/Button";
import Logo from "../components/UI/Logo";
import { signIn } from 'next-auth/react';
import React from 'react'
const SplashScreen = () => {
	return (
		<>
			<SplashIllustration />
			<Logo />
			<div className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-4">
				<p>
				&quot;The crux is in absorbing, not just accessing, the
					information at hand&quot; is the motivation for and motto of this
					app.
				</p>
				<p className="font-signika text-lg leading-4 pt-2">
					How It Works:
				</p>
				<p className="text-lightPurple ">
					You add words to your vocabulary and the app returns its
					meaning, translation and synonyms. It also quizes you on
					those words to help you remember them. You take one
					everytime you open the app
				</p>
			</div>
			<div className="w-full flex flex-col">
<Link href="/dashboard">
  <Button variant="contained" className="bg-bgBlue">Dashboard</Button> 
</Link>
			<Link href='/signin'>
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
