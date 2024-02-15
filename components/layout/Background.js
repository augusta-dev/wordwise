"use client";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Layout from "./Layout";
const Background = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);

	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [isDesktop, setIsDesktop] = useState(false);
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
