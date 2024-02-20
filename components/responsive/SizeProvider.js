import React from "react";
import SizeContext from "./SizeContext";

const sizeReducer = (state, action) => {
	if (action.type === "MOBILE") {
		return { ...state, mobile: action.payload };
	}
	if (action.type === "TABLET") {
		return { ...state, tablet: action.payload };
	}
	if (action.type === "DESKTOP") {
		return { ...state, desktop: action.payload };
	}
};
export default function SizeProvider(props) {
	const [state, dispatch] = React.useReducer(sizeReducer, {mobile: true, tablet: true, desktop: true});
	const setMobile = (bool) => {
		dispatch({ type: "MOBILE", payload: bool });
	};
	const setTablet = (bool) => {
		dispatch({ type: "TABLET", payload: bool });
	};
	const setDesktop = (bool) => {
		dispatch({ type: "DESKTOP", payload: bool });
	};
	let sizeContext = {
		mobile: state.mobile,
		tablet: state.tablet,
		desktop: state.desktop,
		setMobile: setMobile,
		setTablet: setTablet,
		setDesktop: setDesktop,
	};
	return <SizeContext.Provider value={sizeContext}>{props.children}</SizeContext.Provider>;
}
