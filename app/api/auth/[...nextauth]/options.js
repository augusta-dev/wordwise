import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from 'next/navigation'
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
				email: {
				    label: 'email',
				    type: 'email',
				    placeholder: 'Enter your email address'
				},
				password: {
					label: "password",
					type: "password",
					placeholder: "Enter your password",
				},
				authorize: async function (credentials) {
					//retrieve user credential from database
					//visit the docs at 'nextauth.js.org/configuration/providers/credentials
					const user = {
						id: "19",
						name: "Augusta Nwosu",
						email: "augustan506@gmail.com",
						password: "nextauth",
					};
					if (
						credentials?.email === user.email &&
						credentials?.password === user.password
					) {
						redirect('/dashboard');
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
}
// console.log(authOptions);

