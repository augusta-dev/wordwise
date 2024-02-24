import React from "react";
import DesktopSignUpInput from "../UI/DesktopSignUpInput";

export default function DesktopForm(props) {
	return (
		<form className="z-40">
			<DesktopSignUpInput
				className="ml-[28%]"
				placeholder="Enter your full name"
				type="text"
				onChange={(e) => props.setName(e.target.value)}
				onClick={(e) => props.setName(e.target.value)}
				onMouseOver={(e) => props.setName(e.target.value)}
				required
			/>
			<DesktopSignUpInput
				className="ml-[21%]"
				placeholder="Enter your email address"
				type="email"
				onChange={(e) => props.setEmail(e.target.value)}
				onClick={(e) => props.setEmail(e.target.value)}
				onMouseOver={(e) => props.setEmail(e.target.value)}
				required
			/>
			<DesktopSignUpInput
				className="ml-[14%]"
				placeholder="Enter your password"
				type="password"
				onChange={(e) => props.setPasswordHolder(e.target.value)}
				onClick={(e) => props.setPasswordHolder(e.target.value)}
				onMouseOver={(e) => props.setPasswordHolder(e.target.value)}
			/>
			<DesktopSignUpInput
				className="ml-[7%]"
				placeholder="Confirm your password"
				type="password"
				onChange={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				onClick={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				onMouseOver={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				required
			/>
			<button
				className={`${props.tablet ? 'h-12 my-2 rounded-xl w-full' : 'h-[4vw]  my-3 rounded-full w-[61%] '}   bg-purpleBody text-white font-semibold`}
				type="submit"
				onClick={(e) => props.submitHandler(e)}
			>
				Sign Up
			</button>
		</form>
	);
}
