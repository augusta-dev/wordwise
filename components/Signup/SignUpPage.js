"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import MobileSignUp from "../responsive/MobileSignUp";
import { signIn } from "next-auth/react";
import DesktopSignUp from "../responsive/DesktopSignUp";
import SizeContext from "../responsive/SizeContext";

const SignUp = () => {
	const sizeCtx = useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordHolder, setPasswordHolder] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		
		if (name == "" || email == "" || password == "") {
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
			{(desktop || tablet) && (
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
