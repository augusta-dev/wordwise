import React,{useState} from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import signinillustration from "../../assets/SigninIllustration.svg";
import DesktopSigninInput from "../UI/DesktopSigninInput";
import Link from "next/link";
import ErrorDisplay from "../Signin/ErrorDisplay";

export default function DesktopSignin(props) {
	const error = props.error;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="w-full px-[3vw]">
			<Navbar signin={true}></Navbar>
			<div className="flex align-middle flex-row">
				<section className="w-2/5 pr-[4vw] flex flex-col align-middle justify-center">
					<h1 className="text-[3.2vw] font-signika font-semibold shadow-textBlue">
						Continue The Journey!
					</h1>
					<h5 className="font-semibold font-signika text-lg leading-5 -mt-3">
						Remember, it’s about absorption, not just access to
						information
					</h5>
					{error.message && (
						<ErrorDisplay
							error={error}
							setError={props.setError}
						/>
					)}
					<form className="flex flex-col ">
						<DesktopSigninInput
							placeholder="Enter your email address"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							onMouseOver={(e) => setEmail(e.target.value)}
							onMouseOut={(e) => setEmail(e.target.value)}
						/>
						<DesktopSigninInput
							type="password"
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
							onMouseOut={(e) => setPassword(e.target.value)}
							onMouseOver={(e) => setPassword(e.target.value)}
						/>

						<button
							className="h-[52px] bg-purpleBody text-center w-full mt-3 text-white rounded-xl"
							type="submit"
							onClick={(e) =>
								props.submitHandler(e, email, password)
							}
						>
							Sign In
						</button>
					</form>
					<Link href="/signup">
						<button className="h-[52px] bg-lightPurple text-center w-full mt-10 text-white rounded-xl">
							Sign Up Instead
						</button>
					</Link>
				</section>
				<section className="w-3/5  py-[2vw] -mr-40">
					<Image
						src={signinillustration}
						className="h-[90%]"
					></Image>
				</section>
			</div>
		</div>
	);
}
