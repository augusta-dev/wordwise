"use client";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React, { useState, useRef, useContext } from "react";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import Raindrops from "./Raindrops";
import "./Raindrops.css";
import Input from "../UI/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EmailProvider from "../EmailContext/EmailProvider";
import EmailContext from "../EmailContext/EmailContext";
import { useSearchParams } from "next/navigation";

const SignInPage = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({});
	const router = useRouter();
	const emailCtx = useContext(EmailContext);
	console.log(emailCtx.email)
	const getEmail = emailCtx.setEmail;
	const submitHandler = async (e) => {
		e.preventDefault();
		getEmail(email);
		try {
			
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});
			console.log("something", res);
			if (res.error) {
				//console.log(res)
				setError({ color: "bg-red", message: "Invalid Credentials" });
				return;
			}
			setError({ color: "bg-green-600", message: "Successful" });
			//console.log(email)
			
			console.log(emailCtx, email)
			router.replace("dashboard");
		} catch (err) {
			console.log(err);
		}
	};

	return (
			<SessionProvider>
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
						<form>
							<Input
								className="text-lightPurple bg-white"
								placeholder="Enter your email address"
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								onMouseOver={(e) => setEmail(e.target.value)}
								onMouseOut={(e) => setEmail(e.target.value)}
							>
								Enter your email address
							</Input>
							<Input
								className="text-lightPurple bg-white"
								type="password"
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
								onMouseOut={(e) => setPassword(e.target.value)}
								onMouseOver={(e) => setPassword(e.target.value)}
							/>

							<Button
								className="mb-2 mt-8"
								type="submit"
								onClick={(e) => submitHandler(e)}
							>
								{" "}
								Sign in
							</Button>
						</form>
						<Link href="/signup">
							<Button className="!mt-2"> Sign Up Instead</Button>
						</Link>
						{error.message && (
							<p
								className={`${error.color} shadow-lg text-center text-white text-lg rounded-full h-8 font-semibold`}
							>
								{error.message}
							</p>
						)}
					</div>
				</div>
			</SessionProvider>
	);
};
export default SignInPage;
