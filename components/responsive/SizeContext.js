'use client'
import React from "react";
const SizeContext = React.createContext({
	mobile: false,
	tablet: false,
	desktop: false,
	setMobile: () => {},
	setTablet: () => {},
	setDesktop: () => {},
});
export default SizeContext;
