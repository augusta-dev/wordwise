import React from "react";

export default function Layout(props) {
	const mobile = props.mobile;
	const isDesktop = props.isDesktop;
	return (
		<div className="flex flex-col flex-wrap">
			<div className={`${mobile && 'w-80 h-96'} ${isDesktop && 'w-fit h-fit'} fixed`}>
				<div
					className={`${mobile && "w-36 h-36 blur-[60px] "} ${
						isDesktop && "w-96 h-96 blur-[140px]"
					} left-0 top-0 fixed`}
				>
					<div
						className={`${mobile && "w-36 h-36 -left-8 -top-8 "} ${
							isDesktop && "w-96 h-96 -ml-28 -mt-12"
						} absolute z-10 bg-blurBlue bg-opacity-100 rounded-full`}
					/>
				</div>
				<div
					className={`${
						mobile && "w-32 h-32 -top-10 -left-40 blur-[80px] "
					} ${
						isDesktop &&
						"w-80 h-80 -top-20 left-[500px] blur-[150px]"
					} -ml-0 float-right`}
				>
					<div
						className={`${
							mobile && "w-32 h-32 -left-40 top-10 -ml-10 "
						} ${
							isDesktop && "w-80 h-80 -mt-24 ml-[240px]"
						} z-0 bg-red bg-opacity-90 rounded-full `}
					/>
				</div>
				<div
					className={`${mobile && "w-36 h-36 blur-[50px]"} ${
						isDesktop && "w-80 h-80 blur-[150px]"
					} relative "`}
				>
					<div
						className={`${mobile && "w-36 h-36 -left-10 top-24"} ${
							isDesktop && "w-80 h-80 -ml-24 top-40"
						} absolute bg-purple-400 bg-opacity-90 rounded-full`}
					/>
				</div>
			</div>
			<div
				className={`${
					mobile &&
					"w-80 h-96 top-[calc(100vh-220px)] left-[calc(100vw-240px)]"
				} ${
					isDesktop &&
					"w-fit h-fit top-[calc(100vh-540px)] left-[calc(100vw-450px)]"
				} fixed`}
			>
				<div
					className={`${mobile && "w-36 h-36 blur-[100px]"} ${
						isDesktop && "w-80 h-80 blur-[170px]"
					} relative`}
				>
					<div
						className={`${mobile && "w-36 h-36 left-20"} ${
							isDesktop && "w-80 h-80 left-56"
						} top-6 absolute bg-purple-400 bg-opacity-90 rounded-full`}
					/>
				</div>
				<div
					className={`${mobile && "w-32 h-32 -top-10 blur-[100px]"} ${
						isDesktop && "w-80 h-80 -ml-40 mt-10 blur-[170px]"
					} float-left`}
				>
					<div
						className={`${mobile && "w-32 h-32"} ${
							isDesktop && "w-80 h-80"
						} z-0 bg-red bg-opacity-90 rounded-full`}
					/>
				</div>
				<div
					className={`${mobile && "w-36 h-36 blur-[100px]"} ${
						isDesktop && "w-96 h-96 blur-[150px]"
					}  left-0 top-0`}
				>
					<div
						className={`${mobile && "w-36 h-36"} ${
							isDesktop && "w-96 h-96"
						} left-32 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full`}
					/>
				</div>
			</div>
			<div className="w-[100vw] h-[100vh] flex justify-center items-center align-middle z-10 blur-0">
				<div className="flex flex-col h-fit px-9 w-full text-darkPurple font-rubik">
					{props.children}
				</div>
			</div>
		</div>
	);
}
