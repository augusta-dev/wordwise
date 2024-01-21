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
import Image from "next/image";
import Delete from "../../assets/delete.svg";
import crossImg from "../../assets/crossImg.svg";
import crossDel from "../../assets/crossDelete.svg";
import crossGreen from "../../assets/crossGreen.svg";
import tickImg from "../../assets/tickImg.svg";

const SignInPage = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({});
	const router = useRouter();
	const emailCtx = useContext(EmailContext);
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
			if (res.error) {
				setError({
					color: "text-red",
					subtext: "text-red700",
					bg: "bg-red100",
					message: "Invalid Credentials",
					image: crossImg,
					title: "Login Unsuccessful",
					delete: crossDel,
					line: "bg-red200",
				});
				return;
			}
			setError({
				color: "text-green500",
				subtext: "text-green-700",
				bg: "bg-green-50",
				message: "Login Successful",
				image: tickImg,
				title: "Success",
				delete: crossGreen,
				line: "bg-green-200",
			});
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
						{error.message && (
							<>
								<div
									className={` ${error.bg}  rounded-md flex flex-col w-full justify-between`}
								>
									<div className="flex flex-row w-full justify-between py-2 px-4">
										<div
											className={`w-1/8 flex align-middle`}
										>
											<Image
												src={error.image}
												className="w-7"
												alt=""
											/>
										</div>
										<div
											className={`w-3/4 h-fit flex flex-col `}
										>
											<h2
												className={` ${error.color} text-base font-semibold leading-6`}
											>
												{error.title}
											</h2>
											<p
												className={`${error.subtext} text-sm`}
											>
												{error.message}
											</p>
										</div>
										<button
											className="w-1/8 right self-start"
											onClick={() => setError({})}
										>
											<Image
												src={error.delete}
												className="w-4 pt-1"
												alt="de"
											/>
										</button>
									</div>

									<div
										className={`w-full rounded-b-md h-1 ${error.line}`}
									></div>
								</div>
							</>
						)}
						<Button
							className="mb-2 mt-8"
							type="submit"
							onClick={(e) => submitHandler(e)}
						>
							Sign in
						</Button>
					</form>
					<Link href="/signup">
						<Button className="!mt-2"> Sign Up Instead</Button>
					</Link>
				</div>
			</div>
		</SessionProvider>
	);
};
export default SignInPage;
