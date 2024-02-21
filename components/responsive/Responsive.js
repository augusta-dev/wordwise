'use client'
import React from "react";
import { useMediaQuery } from "react-responsive";
import SizeContext from "./SizeContext";
import { useEffect, useContext, useState } from "react";

export default function Responsive(props) {
	const sizeCtx = useContext(SizeContext);
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	//vercel doesnt support having multiple arguments in the same query string
	const [isTablet, setTablet] = useState(false)

	const isBelowLaptop = useMediaQuery({ query: `(max-width: 1024px)` });
	const isAboveMobile = useMediaQuery({ query: `(min-width: 768px)` });

	useEffect(()=> {
		(isBelowLaptop && isAboveMobile) ? setTablet(true) : setTablet(false);
	}, [isBelowLaptop, isAboveMobile])

	useEffect(() => {
		!isMobile && !isTablet
			? sizeCtx.setDesktop(true)
			: sizeCtx.setDesktop(false);
	}, [isMobile, isTablet]);

	useEffect(() => {
		isMobile ? sizeCtx.setMobile(true) : sizeCtx.setMobile(false);
	}, [isMobile]);

	useEffect(() => {
		isTablet ? sizeCtx.setTablet(true) : sizeCtx.setTablet(false);
	}, [isTablet]);

	return <>{props.children}</>;
}
