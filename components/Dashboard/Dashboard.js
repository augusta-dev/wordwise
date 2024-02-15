"use client";
import React, { useContext, useEffect, useState } from "react";
import DashBoardButtons from "./DashBoardButtons";
import MostRecentWord from "./MostRecentWord";
import WordDisplay from "./WordDisplay";
import WordSearch from "./WordSearch";
import ListContext from "../WordList/ListContext";
import MostRecentWordTr from "./MostRecentWordTr";
import { useMediaQuery } from "react-responsive";
import Navbar from "../layout/Navbar";
import DesktopButtons from "./DesktopButtons";

const Dashboard = (props) => {
	const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
	const [mobile, setMobile] = useState(false);

	const isTablet = useMediaQuery({ query: `(max-width: 1024px)` });
	const [tablet, setTablet] = useState(false);

	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		!isMobile && !isTablet ? setIsDesktop(true) : setIsDesktop(false);
	}, [isMobile, isTablet]);

	useEffect(() => {
		isMobile ? setMobile(true) : setMobile(false);
	}, [isMobile]);

	useEffect(() => {
		isTablet ? setTablet(true) : setTablet(false);
	}, [isTablet]);

	const [errorMessage, setErrorMessage] = useState("");

	const listCtx = useContext(ListContext);
	let word = listCtx.words[0];
	return (
		<div
			className={`${
				isDesktop && "px-6"
			} flex justify-between h-screen flex-col font-signika pb-14 pt-10 text-justify`}
		>
			{mobile && (
				<>
					<DashBoardButtons />
					<WordSearch setErrorMessage={setErrorMessage} />
				</>
			)}
			{tablet && (
				<>
					<Navbar dashboard={true}></Navbar>
					<div className="flex flex-row w-full mt-5">
						<DashBoardButtons
							className="w-[55%]"
							font="text-[15px] px-6 h-12"
							desktop={true}
						/>
						<WordSearch
							className="w-[45%]"
							desktop={true}
							setErrorMessage={setErrorMessage}
						/>
					</div>
				</>
			)}
			{isDesktop && (
				<>
					<Navbar dashboard={true}></Navbar>
					<div className="flex flex-row w-full mt-5">
						<DashBoardButtons
							className="w-[55%]"
							font="text-[15px] px-6 h-12"
							desktop={true}
						/>
						<WordSearch
							className="w-[45%]"
							desktop={true}
							setErrorMessage={setErrorMessage}
						/>
					</div>
				</>
			)}
			<p className="text-base self-center text-orange pt-2 -mb-2">
				{errorMessage}
			</p>
			{word.language === "English" && <MostRecentWord />}
			{word.language === "Turkish" && <MostRecentWordTr />}
			<WordDisplay />
			{/* <ArrayDissectioning /> */}
		</div>
	);
};
export default Dashboard;
