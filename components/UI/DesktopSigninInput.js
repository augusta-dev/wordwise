import React from "react";

export default function DesktopSigninInput(props) {
	return (
		<input
			className="border border-purpleBody h-[52px] rounded-xl text-center mt-3 placeholder:text-lightPurple text-lightPurple text-lg bg-transparentWhite z-40"
			type={props.type}
			onInput={props.onInput}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
			required={true}
			onMouseOver={props.onMouseOver}
			onMouseOut={props.onMouseOut}
			onClick={props.onClick}
		/>
	);
}
