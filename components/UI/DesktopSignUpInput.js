import React from "react";

export default function DesktopSignUpInput(props) {
	return (
		<input
			className={`${props.className}  bg-transparentWhite text-lightPurple placeholder:text-lightPurple rounded-full h-[3.5vw] w-[61%] border-purpleBody border mt-2 text-center placeholder:text-lg focus:outline-none`}
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
