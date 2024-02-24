import React, { useEffect, useState } from "react";
import SizeContext from "../responsive/SizeContext";
export default function DesktopSignUpInput(props) {
	const sizeCtx = React.useContext(SizeContext);
	const tablet = sizeCtx.tablet;
	const [className, setClassName] = useState("");
	useEffect(() => {
		tablet ? setClassName("") : setClassName(props.className);
	}, [tablet]);
	console.log(className);
	return (
		<input
			className={`${className} ${
				tablet ? "h-12 mt-1 w-full rounded-xl" : "h-[3.5vw] mt-2 rounded-full "
			} bg-transparentWhite text-lightPurple placeholder:text-lightPurple w-[61%] border-purpleBody border text-center placeholder:text-lg focus:outline-none`}
			type={props.type}
			placeholder={props.placeholder}
			onInput={props.onInput}
			value={props.value}
			onChange={props.onChange}
			required={true}
			onMouseOver={props.onMouseOver}
			onMouseOut={props.onMouseOut}
			onClick={props.onClick}
		/>
	);
}
