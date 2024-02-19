"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import "./Raindrops.css";
import EmailContext from "../EmailContext/EmailContext";
import crossImg from "../../assets/crossImg.svg";
import crossDel from "../../assets/crossDelete.svg";
import crossGreen from "../../assets/crossGreen.svg";
import tickImg from "../../assets/tickImg.svg";
import SigninForm from "./SigninForm";
import DesktopSignin from "../responsive/DesktopSignin";
import SizeContext from "../responsive/SizeContext";

const SignInPage = (props) => {
	const sizeCtx = React.useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;

	const [error, setError] = useState({});
	const router = useRouter();
	const emailCtx = useContext(EmailContext);
	const getEmail = emailCtx.setEmail;

	const submitHandler = async (e, email, password) => {
		e.preventDefault();
		getEmail(email);
		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			if (res.error) {
				setError({
					color: "text-red",
					subtext: "text-red700",
					bg: "bg-red100",
					message: "Invalid Credentials",
					image: crossImg,
					title: "Login Unsuccessful",
					delete: crossDel,
					line: "bg-red200",
				});
				return;
			}
			setError({
				color: "text-green500",
				subtext: "text-green-700",
				bg: "bg-green-50",
				message: "Login Successful",
				image: tickImg,
				title: "Success",
				delete: crossGreen,
				line: "bg-green-200",
			});
			router.replace("dashboard");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<SessionProvider>
			{mobile && (
				<SigninForm
					error={error}
					setError={setError}
					submitHandler={submitHandler}
				/>
			)}
			{(desktop || tablet) && (
				<DesktopSignin
					error={error}
					setError={setError}
					submitHandler={submitHandler}
				/>
			)}
		</SessionProvider>
	);
};
export default SignInPage;
