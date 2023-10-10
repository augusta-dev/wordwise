import Button from "../UI/Button";
import Link from "next/link";
import Input from "../UI/Input";
// import { FormEvent } from 'react';
// import Form from 'next/form';
import SigninAuthForm from "./SigninAuthForm";
const Authentication = () => {
	return <SigninAuthForm onSubmit={submitHandler}></SigninAuthForm>;
};
export default Authentication;
export async function action({ event }) {
	event.preventDefault;
	const formData = new FormData(event.target);
	// const response = await fetch("/api/submit", {
	// 	method: "POST",
	// 	body: formData,
	// });
	const url = new URL(event.url).toString();
	if (url.includes(signin)) {
		const authData = {
			email: formData.get("email"),
			password: formData.get("password"),
		};
		const response = await fetch("http://localhost:3000/signin", {
			method: "POST",
			header: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});
		// fetch("http://localhost:3000/signin");
		console.log(authData);
	}
	else if (url.includes(signup)) {
		const authData = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password"),
		};
		const response = await fetch("http://localhost:3000/signup", {
			method: "POST",
			header: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(authData),
		});
		console.log(authData);

	}



	fetch("http://localhost:3000/");

	const data = await response.json();
}
