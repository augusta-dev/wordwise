import React from 'react'
import Logo from "../UI/Logo";
import BeginIllustration from "../../assets/BeginIllustration";
import SignUpForm from "../Signup/SignUpForm"

export default function MobileSignUp(props) {
  return (
    <div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center mb-6">
				<p className="font-semibold text-darkPurple text-2xl leading-3 pb-8">
					Begin the journey!
				</p>

				<BeginIllustration />
				<SignUpForm
					setName={props.setName}
					setEmail={props.setEmail}
					setPasswordHolder={props.setPasswordHolder}
					passwordHolder={props.passwordHolder}
					setPassword={props.setPassword}
					submitHandler={props.submitHandler}
					error={props.error}
				/>
			</div>
		</div>
  )
}
