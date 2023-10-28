"use client";
import { useContext, useState } from "react";
import ListContext from "../WordList/ListContext";
import React from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import ReturnText from "../UI/ReturnText";

const IndividualWords = (props) => {
	const listCtx = useContext(ListContext);
	let meaning = Object.entries(props.meaning);
	let synonyms = Object.entries(props.synonyms);
	let translations = Object.entries(props.translation);
	const clickHandler = (id) => {
		listCtx.flipArrow(id);
	};

	const capitalizeInitial = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};

	return (
		<div
			className="flex flex-warp flex-col justify-between text-xl pt-2 w-full px-1"
			key={props.key}
		>
			<div className="flex flex-row justify-between w-full font-signika">
				<p className="inline text-blue">
					{capitalizeInitial(props.word)}
				</p>
				
				<p className="inline text-lightPurple">
					{capitalizeInitial(translations[0][1][0])}
				</p>
				
				<button
					onClick={() => {
						clickHandler(props.id);
					}}
				>
					<Image
						src={arrow}
						alt=""
						className={`transform duration-150 ${
							props.arrowUp ? "rotate-0" : "rotate-180"
						}`}
					/>
				</button>
			</div>
			<div
				className={`transform delay-700 duration-700 ${
					props.arrowUp ? "ease-in " : "ease-out hidden"
				} flex flex-col w-full text-sm font-rubik first-letter:uppercase`}
			>
				{meaning.map((mean) => (
					<p
						key={Math.random().toString()}
						id="meaning"
						className=""
					>
						Meaning({mean[0]}): {capitalizeInitial(mean[1])}
					</p>
				))}
				{synonyms.map((syn) => {
					if (syn[1].length !== 0) {
						return (
							<p
								key={Math.random().toString()}
								id="syn"
								className="text-purpleBody"
							>
								Synonyns({syn[0]}): <ReturnText text={syn[1]} />
							</p>
						);
					}
				})}
				{translations.map((translation) => {
					if (translation[1].length !== 0) {
						return (
							<p
								key={Math.random().toString()}
								id="tran"
								className="text-blue"
							>
								Translation(
								{translation[0].replaceAll('"', "")}):{" "}
								<ReturnText text={translation[1]} />
							</p>
						);
					}
				})}
				{/* <p className="text-purpleBody">
					Synonyms: <ReturnText text={props.synonyms}></ReturnText>
				</p>
				<p className="text-blue">
					Translation:
					<ReturnText text={props.translation}></ReturnText>
				</p> */}
			</div>
		</div>
	);
};

export default IndividualWords;
