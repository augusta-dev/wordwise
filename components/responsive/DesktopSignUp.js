import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import begin from "../../assets/begin.svg";
import DesktopForm from "../Signup/DesktopForm";
import SizeContext from "./SizeContext";
import Link from "next/link";

export default function DesktopSignUp(props) {
	const sizeCtx = React.useContext(SizeContext);
	const tablet = sizeCtx.tablet;
	return (
		<div className={`grid grid-cols-1 ${tablet ? "" : "px-12 "} `}>
			<Navbar signup={true} />
			<section
				className={`${
					tablet ? "mt-2 order-1" : "mt-4"
				} font-signika font-semibold col-start-1`}
			>
				<h1 className={`${tablet ? "text-[4vw]" : "text-[3vw]"} `}>
					Begin Your Journey!
				</h1>
				<h4
					className={`${
						tablet ? "-mt-3 text-lg" : "-mt-1 text-2xl"
					} ml-72 text-purpleBody`}
				>
					Unlock language treasures, one word at a time.
				</h4>
			</section>
			{props.error && (
				<p className=" text-red  text-center font-signika text-xl my-2">{props.error}</p>
			)}
			<div className={`${tablet ? "order-3 w-full" : "order-4 "} z-20`}>
				<DesktopForm
					setName={props.setName}
					setEmail={props.setEmail}
					setPasswordHolder={props.setPasswordHolder}
					passwordHolder={props.passwordHolder}
					setPassword={props.setPassword}
					submitHandler={props.submitHandler}
					error={props.error}
					tablet={tablet}
				/>
				<Link href="/signin" className='w-full'>
					<button
						className={`${
							tablet
								? "h-12 my-2 rounded-xl w-full "
								: "h-[4vw] w-[61%] rounded-full ml-[7%] "
						} bg-lightPurple text-white font-semibold `}
					>
						Sign In Instead
					</button>
				</Link>
			</div>

			<Image
				src={begin}
				className={`${
					tablet
						? "order-2 mb-4"
						: "order-4 -mt-[21%] w-[84%] ml-auto"
				}  h-auto  z-10`}
				alt="begin"
			></Image>
		</div>
	);
}
