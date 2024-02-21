"use client";
import { useContext } from "react";
import Layout from "./Layout";
import Responsive from "../responsive/Responsive";
import SizeContext from "../responsive/SizeContext";

const Background = (props) => {
	const sizeCtx = useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;

	return (
		<>
			<Responsive>
			<Layout
				mobile={mobile}
				isDesktop={desktop}
				tablet={tablet}
			>
				{props.children}
			</Layout>
			</Responsive>
		</>
	);
};
export default Background;
