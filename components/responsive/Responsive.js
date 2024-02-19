import React from "react";
import { useMediaQuery } from "react-responsive";
import SizeContext from "./SizeContext";
import { useEffect, useContext } from "react";

export default function Responsive() {
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

	return <></>;
}
