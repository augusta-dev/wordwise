import React,{useState} from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import signinillustration from "../../assets/SigninIllustration.svg";
import DesktopSigninInput from "../UI/DesktopSigninInput";
import Link from "next/link";
import ErrorDisplay from "../Signin/ErrorDisplay";
import SizeContext from "./SizeContext"

export default function DesktopSignin(props) {
	const sizeCtx = React.useContext(SizeContext);
	const tablet = sizeCtx.tablet;

	const error = props.error;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={`${!tablet && "px-[3vw]"} w-full`}>
			<Navbar signin={true}></Navbar>
			<div className={`${tablet && 'flex-col'} flex align-middle flex-row`}>
				<section className={`${tablet && 'w-full'} w-2/5 pr-[4vw] flex flex-col align-middle justify-center`}>
					<h1 className={`${tablet ? 'w-3/5 pt-4 text-[4vw]' : 'text-[3.2vw]'}  font-signika font-semibold shadow-textBlue`}>
						Continue The Journey!
					</h1>
					<h5 className={`${tablet && 'w-2/3 pr-6 pt-2'} font-semibold font-signika text-lg leading-5 -mt-3`}>
						Remember, it’s about absorption, not just access to
						information
					</h5>
					{error.message && (
						<ErrorDisplay
							error={error}
							setError={props.setError}
						/>
					)}
					{tablet && <Image
						src={signinillustration}
						className="h-auto w-full -mt-20 pl-32"
					></Image>}
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
						<button className="h-[52px] bg-bgBlue text-center w-full mt-10 text-white rounded-xl">
							Sign Up Instead
						</button>
					</Link>
				</section>
				{!tablet && <section className="w-3/5  py-[2vw] -mr-40">
					<Image
						src={signinillustration}
						className="h-[90%]"
					></Image>
				</section>}
			</div>
		</div>
	);
}
