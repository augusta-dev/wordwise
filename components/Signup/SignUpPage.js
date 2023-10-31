"use client";
import Logo from "../UI/Logo";
import BeginIllustration from "../../assets/BeginIllustration";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Link from "next/link";
import { useState } from "react";
// import {signUp} from 'next-auth/react'
import { useRouter } from "next/navigation";
const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordHolder, setPasswordHolder] = useState("");
	const router = useRouter();
	const nameHandler = (e) => {
		setName(e.target.value);
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};
	const passwordHolderHandler = (e) => {
		setPasswordHolder(e.target.value);
	};
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(name);
		console.log(email);
		console.log(password);
        console.log(passwordHolder)
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
			console.log(data);
			if (response.error) {
				console.log(response.error);
				return;
			} else {
				console.log(data);
				// router.replace("dashboard");
			}

			// const res = await User.create();
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center mb-6">
				<p className="font-semibold text-darkPurple text-2xl leading-3 pb-8">
					Begin the journey!
				</p>

				<BeginIllustration />
			</div>
			<form>
				<Input
					type="text"
					placeholder="Enter your full name"
					onChange={(e) => setName(e.target.value)}
					onClick={(e) => setName(e.target.value)}
					onMouseOver={(e) => setName(e.target.value)} required
				/>
				<Input
					type="email"
					placeholder="Enter your email address"
					onChange={(e) => setEmail(e.target.value)}
					onClick={(e) => setEmail(e.target.value)}
					onMouseOver={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Enter your password"
					onChange={(e) => setPasswordHolder(e.target.value)}
					onClick={(e) => setPasswordHolder(e.target.value)}
					onMouseOver={(e) => setPasswordHolder(e.target.value)}
					required
				/>
				<Input
					type="password"
					placeholder="Confirm your password"
					onChange={(e) => {
						if (passwordHolder == e.target.value) {
							setPassword(e.target.value);
						}
					}}
					onClick={(e) => {
						if (passwordHolder == e.target.value) {
							setPassword(e.target.value);
						}
					}}
					onMouseOver={(e) => {
						if (passwordHolder == e.target.value) {
							setPassword(e.target.value);
						}
					}}
					required
				/>{" "}
				<Button
					className="mt-6 mb-3"
					type="submit"
					onClick={(e) => submitHandler(e)}
				>
					Sign Up
				</Button>
				<Link href="/signin">
					<Button className="mt-1">Sign In Instead</Button>
				</Link>
			</form>
		</div>
	);
};
export default SignUp;
