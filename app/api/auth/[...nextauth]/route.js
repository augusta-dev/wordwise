import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { options } from "./options";
import connectMongo from "../../../../libs/mongodb";
import User from "../../../../models/userProfiles";
import bcrypt from "bcryptjs";

const authOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: {},
				password: {},
			},

			async authorize(credentials) {
				console.log(credentials);
				const { email, password } = credentials;
				console.log(email, password);
				try {
					await connectMongo();
					// const user={email: "jess@jess.com", password:"jessisgreat"}
					const person = await User.findOne({ email });
					console.log(person);
					// console.log(email)
					if (!person) {
						return null;
					}

					if (person.email === email) {
						if (person.password !== password) {
							return null;
						}
						if (person.password === password) {
							return person;
						}
					}
					return null;
				} catch (e) {
					console.log(e);
				}
				// return user;
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/signin",
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
