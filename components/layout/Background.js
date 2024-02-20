"use client";
import { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import { useMediaQuery } from "react-responsive";
// import Responsive from "../responsive/Responsive";

const Background = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const isTablet = useMediaQuery({
		query: `(max-width: 1024px; min-width: 768px)`,
	});
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

	return (
		<>
			{/* <Responsive> */}
			<Layout
				mobile={isMobile}
				isDesktop={isDesktop}
			>
				{props.children}
			</Layout>
			{/* </Responsive> */}
		</>
	);
};
export default Background;
