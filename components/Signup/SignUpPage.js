"use client";
//add signup check. Check the db for that user before permitting the sign up.
import Logo from "../UI/Logo";
import BeginIllustration from "../../assets/BeginIllustration";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SignUp = () => {
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
				router.replace("signin");
			}
		} catch (error) {
			setError("User already exists");
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
					onMouseOver={(e) => setName(e.target.value)}
					required
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
					className="mt-4 mb-1"
					type="submit"
					onClick={(e) => submitHandler(e)}
				>
					Sign Up
				</Button>
				<Link href="/signin">
					<Button className="mt-1">Sign In Instead</Button>
				</Link>
				{error && <Button className="bg-red text-white mt-0">{error}</Button>}
			</form>
		</div>
	);
};
export default SignUp;
