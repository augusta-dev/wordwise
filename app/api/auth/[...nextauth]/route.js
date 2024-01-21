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
				const { email, password } = credentials;
				try {
					await connectMongo();
					const person = await User.findOne({ email });
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
