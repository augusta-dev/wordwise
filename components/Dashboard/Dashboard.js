"use client";
import React, { useContext, useEffect, useState } from "react";
import DashBoardButtons from "./DashBoardButtons";
import MostRecentWord from "./MostRecentWord";
import WordDisplay from "./WordDisplay";
import WordSearch from "./WordSearch";
import ListContext from "../WordList/ListContext";
import MostRecentWordTr from "./MostRecentWordTr";
import Navbar from "../layout/Navbar";
import SizeContext from "../responsive/SizeContext";

const Dashboard = (props) => {
	const sizeCtx = React.useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;

	const [errorMessage, setErrorMessage] = useState("");

	const listCtx = useContext(ListContext);
	let word = listCtx.words[0];
	return (
		<div
			className={`${
				desktop && "px-2 py-2 mb-4"
			} ${tablet && 'py-1' } ${mobile && 'pb-14 pt-10'} flex justify-between h-screen flex-col font-signika  text-justify`}
		>
			{mobile && (
				<>
					<DashBoardButtons font='leading-[8px]' />
					<WordSearch setErrorMessage={setErrorMessage} />
				</>
			)}
			{tablet && (
				<>
					<Navbar dashboard={true}></Navbar>
					<div className={`flex flex-row w-full mt-2`}>
						<DashBoardButtons
							className="w-[58%]"
							font="text-[11px] px-1 h-10 !leading-3"
						/>
						<WordSearch
							className="w-[45%]"
							tablet={true}
							setErrorMessage={setErrorMessage}
						/>
					</div>
				</>
			)}
			{desktop && (
				<>
					<Navbar dashboard={true}></Navbar>
					<div className="flex flex-row w-full mt-5">
						<DashBoardButtons
							className="w-[55%]"
							font="text-[12px] px-6 h-10 !leading-3"
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
