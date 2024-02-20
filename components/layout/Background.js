"use client";
import { useContext, useEffect } from "react";
import Layout from "./Layout";
import { useMediaQuery } from "react-responsive";
// import Responsive from "../responsive/Responsive";
import SizeContext from "../responsive/SizeContext";

const Background = (props) => {
	const sizeCtx = useContext(SizeContext);
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const isTablet = useMediaQuery({
		query: `(max-width: 1024px; min-width: 768px)`,
	});

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

	return (
		<>
			{/* <Responsive> */}
			<Layout
				mobile={isMobile}
				isDesktop={sizeCtx.desktop}
			>
				{props.children}
			</Layout>
			{/* </Responsive> */}
		</>
	);
};
export default Background;
