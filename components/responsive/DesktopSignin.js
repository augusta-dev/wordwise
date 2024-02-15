import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import signinillustration from "../../assets/SigninIllustration.svg";
import DesktopSigninInput from "../UI/DesktopSigninInput";
export default function DesktopSignin() {
	return (
		<div className="w-full px-[3vw]">
			<Navbar signin={true}></Navbar>
			<div className="flex align-middle flex-row">
				<section className="w-2/5 pr-[4vw] flex flex-col align-middle justify-center">
					<h1 className="text-[3.2vw] font-signika font-semibold shadow-textBlue">Continue The Journey!</h1>
					<h5 className="font-semibold font-signika text-lg leading-5 -mt-3">Remember, it’s about absorption, not just access to information</h5>
					<div className="flex flex-col ">
						<DesktopSigninInput placeholder={'Enter your email address'} />
						<DesktopSigninInput placeholder={'Enter your password'}  />

						<button className="h-[52px] bg-purpleBody text-center w-full mt-3 text-white rounded-xl">Sign in</button>
					</div>

					<button className="h-[52px] bg-lightPurple text-center w-full mt-10 text-white rounded-xl">Sign up instead</button>
				</section>
				<section className="w-3/5  py-[2vw] -mr-40">
					<Image src={signinillustration} className="h-[90%]"></Image>
				</section>
			</div>
		</div>
	);
}
