import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import begin from "../../assets/begin.svg";
import DesktopForm from "../Signup/DesktopForm";

export default function DesktopSignUp(props) {
	return (
		<div className="flex flex-col px-12 py-6">
			<Navbar signup={true} />
			<section className="mt-8  font-signika font-semibold ">
				<h1 className="text-5xl ">Begin Your Journey!</h1>
				<h4 className="ml-72 text-lg text-purpleBody -mt-1">
					Unlock language treasures, one word at a time.
				</h4>
			</section>
            {props.error && (
				<p className="bg-red text-white mt-0">{props.error}</p>
			)}
			<DesktopForm
				setName={props.setName}
				setEmail={props.setEmail}
				setPasswordHolder={props.setPasswordHolder}
				passwordHolder={props.passwordHolder}
				setPassword={props.setPassword}
				submitHandler={props.submitHandler}
				error={props.error}
			/>

			<button className="h-[4vw] w-[61%] bg-lightPurple rounded-full mt-4 text-white font-semibold ml-[7%]">
				Sign In Instead
			</button>


			<Image
				src={begin}
				className="-mt-[21%] w-[84%] h-auto self-end z-10"
				alt="begin"
			></Image>
		</div>
	);
}
