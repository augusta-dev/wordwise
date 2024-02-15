"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileSignUp from "../responsive/MobileSignUp";
import { signIn } from "next-auth/react";
import DesktopSignUp from "../responsive/DesktopSignUp";
import { useMediaQuery } from "react-responsive";

const SignUp = () => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);

	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [tablet, setTablet] = useState(false);

	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

	useEffect(() => {
		isMobile ? setMobile(true) : setMobile(false);
	}, [isMobile]);

	useEffect(() => {
		isTablet ? setTablet(true) : setTablet(false);
	}, [isTablet]);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordHolder, setPasswordHolder] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log("in");
		if (name == "" || email == "" || password == "") {
			console.log(name, email, password);
			setError("Incomplete details");
			if (password == "") {
				setError("Invalid password");
			}
			return;
		}
		try {
			const response = await fetch("/api/newuser", {
				method: "POST",
				body: JSON.stringify({
					userName: name,
					email: email,
					password: password,
				}),
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			if (response.error) {
				console.log(response.error);
				return;
			} else {
				const res = await signIn("credentials", {
					email,
					password,
					redirect: false,
				});
				if (res.error) {
					console.log(res.error);
				} else {
					router.replace("dashboard");
				}
			}
		} catch (error) {
			setError("User already exists");
			console.error(error);
		}
	};
	return (
		<>
			{mobile && (
				<MobileSignUp
					setName={setName}
					setEmail={setEmail}
					setPasswordHolder={setPasswordHolder}
					passwordHolder={passwordHolder}
					setPassword={setPassword}
					submitHandler={submitHandler}
					error={error}
				/>
			)}
			{tablet && (
				<DesktopSignUp
					setName={setName}
					setEmail={setEmail}
					setPasswordHolder={setPasswordHolder}
					passwordHolder={passwordHolder}
					setPassword={setPassword}
					submitHandler={submitHandler}
					error={error}
				/>
			)}
			{isDesktop && (
				<DesktopSignUp
					setName={setName}
					setEmail={setEmail}
					setPasswordHolder={setPasswordHolder}
					passwordHolder={passwordHolder}
					setPassword={setPassword}
					submitHandler={submitHandler}
					error={error}
				/>
			)}
		</>
	);
};
export default SignUp;
