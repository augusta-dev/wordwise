import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Link from "next/link";

export default function SignUpForm(props) {
	return (
		<form>
			<Input
				type="text"
				placeholder="Enter your full name"
				onChange={(e) => props.setName(e.target.value)}
				onClick={(e) => props.setName(e.target.value)}
				onMouseOver={(e) => props.setName(e.target.value)}
				required
			/>
			<Input
				type="email"
				placeholder="Enter your email address"
				onChange={(e) => props.setEmail(e.target.value)}
				onClick={(e) => props.setEmail(e.target.value)}
				onMouseOver={(e) => props.setEmail(e.target.value)}
				required
			/>
			<Input
				type="password"
				placeholder="Enter your password"
				onChange={(e) => props.setPasswordHolder(e.target.value)}
				onClick={(e) => props.setPasswordHolder(e.target.value)}
				onMouseOver={(e) => props.setPasswordHolder(e.target.value)}
				required
			/>
			<Input
				type="password"
				placeholder="Confirm your password"
				onChange={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				onClick={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				onMouseOver={(e) => {
					if (props.passwordHolder == e.target.value) {
						props.setPassword(e.target.value);
					}
				}}
				required
			/>
			<Button
				className="mt-4 mb-1"
				type="submit"
				onClick={(e) => props.submitHandler(e)}
			>
				Sign Up
			</Button>
			<Link href="/signin">
				<Button className="mt-1">Sign In Instead</Button>
			</Link>
			{props.error && (
				<Button className="bg-red text-white mt-0">{props.error}</Button>
			)}
		</form>
	);
}