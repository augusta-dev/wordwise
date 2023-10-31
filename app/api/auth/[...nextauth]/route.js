import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { options } from "./options";
import connectMongo from "../../../../libs/mongodb";
import User from "../../../../models/userProfiles";
import bcrypt from 'bcryptjs'

const authOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},

			async authorize(credentials) {
				const { email, password } = credentials;
				try {
					await connectMongo();
					const user = await User.findOne({ email });
					if (!user) {
						return null;
					} 
					const passwordCheck = await bcrypt.compare(password, user.password)
					if(!passwordCheck) {
						return null
					}
					return user;
				} catch (e) {
					console.error(e);
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
