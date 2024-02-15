import React from "react";
import Image from "next/image";
export default function ErrorDisplay(props) {
	const error = props.error;

	return (
		<div
			className={` ${error.bg} mt-12 mb-6  rounded-md flex flex-col w-full justify-between`}
		>
			<div className="flex flex-row w-full justify-between py-2 px-4">
				<div className={`w-1/8 flex align-middle`}>
					<Image
						src={error.image}
						className="w-7"
						alt=""
					/>
				</div>
				<div className={`w-3/4 h-fit flex flex-col `}>
					<h2
						className={` ${error.color} text-base font-semibold leading-6`}
					>
						{error.title}
					</h2>
					<p className={`${error.subtext} text-sm`}>
						{error.message}
					</p>
				</div>
				<button
					className="w-1/8 right self-start"
					onClick={() => props.setError({})}
				>
					<Image
						src={error.delete}
						className="w-4 pt-1"
						alt="de"
					/>
				</button>
			</div>

			<div className={`w-full rounded-b-md h-1 ${error.line}`}></div>
		</div>
	);
}
