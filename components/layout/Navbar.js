import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/Logo.svg'
export default function Navbar(props) {
    
	return (
		<nav className="flex flex-row">
			<div className="w-2/5 flex">
				<Image
					src={logo}
					width={300}
					height={300}
					className="w-8" alt='logo'
				/>
				<h2 className="font-squada text-2xl ml-4">WordWise</h2>
			</div>

			<div className="flex font-rubik font-semibold  w-full px-[8%] justify-between mr-[20%]">
				<Link href="/" className={`${props.about && "text-blue"}`}>ABOUT</Link>
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
