"use client";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import Layout from "./Layout";
import Responsive from '../responsive/Responsive';
const Background = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	
	const [isTablet, setTablet] = useState(false)

	const isBelowLaptop = useMediaQuery({ query: `(max-width: 1024px)` });
	const isAboveMobile = useMediaQuery({ query: `(min-width: 768px)` });

	const [isDesktop, setIsDesktop] = useState(false);
	const [mobile, setMobile] = useState(false);

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
		<Responsive>
			<Layout
				mobile={mobile}
				isDesktop={isDesktop}
			>
				{props.children}
			</Layout>
		</Responsive>
	);
};
export default Background;
