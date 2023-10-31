// import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from '../../../../models/userProfiles'

export const options = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "Enter your full name",
				},
				password: {
					label: "password",
					type: "password",
					placeholder: "Enter your password",
				},
				async authorize (credentials, req) {
					//retrieve user credential from database
					//visit the docs at 'nextauth.js.org/configuration/providers/credentials
					// const res = await fetch("http://localhost:3000/signin", {
					// 	method: 'POST',
					// 	body: JSON.stringify(credentials),
					// 	headers: { "Content-Type": "application/json" }
					//   })
					//   const userMain = await res.json()
					const user = {
						name: "Augusta",
						password: "nextauth",
						id: "19",
					};
					if (
						credentials.username === user.name &&
						credentials.password === user.password
					) {
						return user;
					} else {
						return null;
					}
				},
			},
		}),
	],
	pages: {
		signIn: "/signin",
		newUser: "/signup",
		error: "/auth/error",
		verifyRequest: "auth/verify-request",
		signOut: "/auth/signout",
	},
};
// console.log(authOptions);
