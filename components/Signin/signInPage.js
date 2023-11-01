"use client";
import { signIn } from "next-auth/react";
import React, { useState, useRef } from "react";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import Raindrops from "./Raindrops";
import "./Raindrops.css";
import Input from "../UI/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SignInPage = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({});
	const router = useRouter();
	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await signIn("credentials", {
				email, password, redirect: false
			});
			console.log(res)
			if(res.error){
				console.log(res)
				setError({color: 'bg-red', message: "Invalid Credentials"});
				return;
			}
			setError({color: 'bg-green-600', message: "Successful"})
			router.replace("dashboard");
		} catch (err) {
			console.log(err);
		}
	};
	// const searchParams = useSearchParams();
	// const router = useRouter();
	// const userName = useRef("");
	// const pass = useRef("");
	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	console.log(userName.current);
	// 	const res = await signIn("credentials", {
	// 		username: userName.current,
	// 		password: pass.current,
	// 		redirect: false,
	// 	});
	// 	if (res?.error) {
	//         console.log(res)
	// 		router.push("http://localhost:3000/dashboard");
	// 	}else{
	// 		console.log(res.error)
	// 	}
	//     console.log('done')
	// };
	// const showChange = (e) => {
	// 	userName.current = e.target.value;
	// 	console.log(e.target.value);
	// };

	return (
		<div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>

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
				<form
					// onSubmit={(e) => submitHandler(e)}
					
				>
					<Input
						className="text-lightPurple bg-white"
						placeholder="Enter your email address"
						type="email"
						onChange={(e) => setEmail(e.target.value)} onMouseOver={(e) => setEmail(e.target.value)} onMouseOut={(e) => setEmail(e.target.value)}
					>
						Enter your email address
					</Input>
					<Input
						className="text-lightPurple bg-white"
						type="password"
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)} onMouseOut={(e) => setPassword(e.target.value)} onMouseOver={(e) => setPassword(e.target.value)}
					/>

					<Button
						className="mb-2 mt-8"
						type="submit" onClick={(e) => submitHandler(e)}
					>
						{" "}
						Sign in
					</Button>
				</form>
				<Link href="/signup">
					<Button className="!mt-2"> Sign Up Instead</Button>
				</Link>
				{error && (
					<p className={`${error.color} shadow-lg text-center text-white text-lg rounded-full h-8 font-semibold`}>
						{error.message}
					</p>
				)}
			</div>
		</div>
	);
};
export default SignInPage;
