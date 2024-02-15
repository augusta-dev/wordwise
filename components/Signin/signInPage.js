"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React, { useState, useEffect, useContext } from "react";
import Button from "../UI/Button";
import "./Raindrops.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EmailContext from "../EmailContext/EmailContext";
import crossImg from "../../assets/crossImg.svg";
import crossDel from "../../assets/crossDelete.svg";
import crossGreen from "../../assets/crossGreen.svg";
import tickImg from "../../assets/tickImg.svg";
import SigninForm from "./SigninForm";
import { useMediaQuery } from "react-responsive";
import DesktopSignin from "../responsive/DesktopSignin";

const SignInPage = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);

	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

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

	useEffect(() => {
		isMobile ? setMobile(true) : setMobile(false);
	}, [isMobile]);

	return (
		<SessionProvider>
			{mobile && (
				<SigninForm
					error={error}
					setError={setError}
					submitHandler={submitHandler}
				/>
			)}
			{isDesktop && <DesktopSignin />}
		</SessionProvider>
	);
};
export default SignInPage;
