"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import Logo from "../UI/Logo";
import Button from "..//UI/Button";
import Raindrops from "./Raindrops";
import "./Raindrops.css";
import Input from "../UI/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = (props) => {
	// alert('yes');
	const router = useRouter();
	const userName = useRef("");
	const pass = useRef("");
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(userName.current);
		const res = await signIn("credentials", {
			username: userName.current,
			password: pass.current,
			redirect: true,
		});
		if (!res?.error) {
			router.push(props.callbackUrl ?? "http://localhost:3000/");
		}
	};
	const showChange = (e) => {
		userName.current = e.target.value;
		console.log(e.target.value);
	};

	return (
		<div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>
			{!!props.error && <p>Authentication failed</p>}
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center">
				<p className="font-semibold text-darkPurple text-2xl leading-3 relative">
					Continue the journey!
				</p>
				{/* <Droplet></Droplet> */}
				<div className="h-48 w-60 grid grid-cols-6 justify-evenly pl-3">
					<Raindrops className="duration-1" />
					<Raindrops className="duration-2" />
					<Raindrops className="duration-3" />
					<Raindrops className="duration-4" />
					<Raindrops className="duration-5" />
					<Raindrops className="duration-6" />
				</div>
			</div>

			<div className="pb-8">
				<form onSubmit={(e) => submitHandler(e)}>
					<Input
						className="text-lightPurple bg-white"
						placeholder="Enter your full name"
						type="text"
						onChange={(e) => showChange(e)}
					>
						Enter your full name
					</Input>
					<Input
						className="text-lightPurple bg-white"
						type="password"
						placeholder="Enter your password"
						onChange={(e) => (pass.current = e.target.value)}
					/>
					<Button
						className="mb-2 mt-8"
						type="submit"
					>
						{" "}
						Sign in
					</Button>
				</form>
				<Link href="/signup">
					<Button className="!mt-2"> Sign Up Instead</Button>
				</Link>
			</div>
		</div>
	);
};
export default SignInPage;
