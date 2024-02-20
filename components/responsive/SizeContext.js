'use client'
import React from "react";
const SizeContext = React.createContext({
	mobile: true,
	tablet: true,
	desktop: true,
	setMobile: () => {},
	setTablet: () => {},
	setDesktop: () => {},
});
export default SizeContext;
