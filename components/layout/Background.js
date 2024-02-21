"use client";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Layout from "./Layout";
const Background = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);
	const [isTablet, setTablet] = useState(false)

	const isBelowLaptop = useMediaQuery({ query: `(max-width: 1024px)` });
	const isAboveMobile = useMediaQuery({ query: `(min-width: 768px)` });
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(()=> {
		(isBelowLaptop && isAboveMobile) ? setTablet(true) : setTablet(false);
	}, [isBelowLaptop, isAboveMobile])
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

	useEffect(() => {
		isMobile ? setMobile(true) : setMobile(false);
	}, [isMobile]);

	return (
		<>
			<Layout
				mobile={mobile}
				isDesktop={isDesktop}
			>
				{props.children}
			</Layout>
		</>
	);
};
export default Background;
