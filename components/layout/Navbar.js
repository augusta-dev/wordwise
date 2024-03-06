import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/Logo.svg'
import SizeContext from "../responsive/SizeContext"

export default function Navbar(props) {
    const sizeCtx = React.useContext(SizeContext);
	const tablet = sizeCtx.tablet;

	return (
		<nav className={`${tablet & 'pt-3'} flex  flex-row`}>
			<div className="w-2/5 flex">
				<Image
					src={logo}
					width={300}
					height={300}
					className="w-8" alt='logo'
				/>
				<h2 className="font-squada text-2xl ml-4">WordWise</h2>
			</div>

			<div className={`${tablet ? 'px-1 mr-0 w-2/3 ': 'mr-[20%] px-[8%] w-full '} flex font-rubik font-semibold  justify-between `}>
				<Link href="/" className={`${props.about && "text-blue"}`}>HOME</Link>
				<p>|</p>
				<Link href="/signin" className={`${props.signin && "text-blue"}`}>SIGNIN</Link>
				<p>|</p>
				<Link href="/signup" className={`${props.signup && "text-blue"}`}>SIGNUP</Link>
				<p>|</p>
				<Link
					href="/dashboard"
					className={`${props.dashboard && "text-blue"}`}
				>
					DASHBOARD
				</Link>
			</div>
		</nav>
	);
}
