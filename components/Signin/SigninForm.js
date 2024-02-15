"use client";
import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import ErrorDisplay from "./ErrorDisplay";
import SigninDesign from "./SigninDesign";
import Link from "next/link";

export default function SigninForm(props) {
	const error = props.error;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<section>
			<div className="flex justify-between h-screen flex-col font-rubik pb-14">
				<SigninDesign />
				{error.message && (
					<ErrorDisplay
						error={error}
						setError={props.setError}
					/>
				)}

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
							onClick={(e) =>
								props.submitHandler(e, email, password)
							}
						>
							Sign in
						</Button>
					</form>
					<Link href="/signup">
						<Button className="!mt-2"> Sign Up Instead</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
