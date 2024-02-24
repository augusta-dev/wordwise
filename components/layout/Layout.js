import React from "react";

export default function Layout(props) {
	const mobile = props.mobile;
	const isDesktop = props.isDesktop;
	const tablet = props.tablet;
	return (
		<div className="flex flex-col flex-wrap">
			<div
				className={`${mobile && "w-72  h-72"} ${
					isDesktop && "w-fit h-fit"
				} ${tablet && "w-fit h-fit"} fixed`}
			>
				<div
					className={`${mobile && "w-36 h-36 blur-[60px] "} ${
						isDesktop && "w-72 h-72 blur-[140px]"
					} ${tablet && "w-60 h-60 blur-[120px]"} left-0 top-0 fixed`}
				>
					<div
						className={`${mobile && "w-36 h-36 -left-8 -top-8 "} ${
							isDesktop && "w-72 h-72 -ml-28 -mt-12"
						} ${
							tablet && "w-60 h-60 -ml-28 -mt-16"
						} absolute z-10 bg-blurBlue bg-opacity-100 rounded-full`}
					/>
				</div>
				<div
					className={`${
						mobile && "w-32 h-32 -top-10 -left-40 blur-[72px] "
					} ${
						isDesktop &&
						"w-72 h-72 -top-20 left-[500px] blur-[150px]"
					} ${
						tablet &&
						"w-60 h-60 -top-8 -left-12 blur-[130px] relative"
					} -ml-0 float-right `}
				>
					<div
						className={`${
							mobile && "w-32 h-32 -left-40 top-10 -ml-10 "
						} ${isDesktop && "w-72 h-72 -mt-24 ml-[240px]"} ${
							tablet && "w-60 h-60 -mt-24 ml-[240px]"
						} z-0 bg-red bg-opacity-90 rounded-full `}
					/>
				</div>
				<div
					className={`${mobile && "w-36 h-36 blur-[50px]"} ${
						isDesktop && "w-72 h-72 blur-[150px]"
					} ${tablet && "w-60 h-60 blur-[130px]"}  relative "`}
				>
					<div
						className={`${mobile && "w-36 h-36 -left-10 top-24"} ${
							isDesktop && "w-72 h-72 -ml-24 top-40"
						} ${
							tablet && "w-60 h-60 -ml-24 top-40"
						} absolute bg-purple-400 bg-opacity-90 rounded-full`}
					/>
				</div>
			</div>
			<div
				className={`${
					mobile &&
					"w-72 h-72 top-[calc(100vh-220px)] left-[calc(100vw-240px)]"
				} ${
					isDesktop &&
					"w-fit h-fit top-[calc(100vh-490px)] left-[calc(100vw-430px)]"
				} ${
					tablet &&
					"w-fit h-fit top-[calc(100vh-400px)] left-[calc(100vw-330px)]"
				} fixed`}
			>
				<div
					className={`${mobile && "w-36 h-36 blur-[100px]"} ${
						isDesktop && "w-72 h-72 blur-[170px]"
					} ${
						tablet && "w-60 h-60 blur-[170px]"
					} relative`}
				>
					<div
						className={`${mobile && "w-36 h-36 left-20 top-6"} ${
							isDesktop && "w-72 h-72 left-40 top-3"
						} ${
							tablet && "w-60 h-60 left-40 top-3"
						}  absolute bg-purple-400 bg-opacity-90 rounded-full`}
					/>
				</div>
				<div
					className={`${mobile && "w-32 h-32 -top-10 blur-[100px]"} ${
						isDesktop && "w-72 h-72 -ml-32 -mt-4 blur-[170px]"
					} ${
						tablet && "w-60 h-60 -ml-8 mt-4 blur-[170px]"
					} float-left`}
				>
					<div
						className={`${mobile && "w-32 h-32"} ${
							isDesktop && "w-72 h-72"
						} ${
							tablet && "w-60 h-60"
						} z-0 bg-red bg-opacity-90 rounded-full`}
					/>
				</div>
				<div
					className={`${mobile && "w-36 h-36 blur-[100px]"} ${
						isDesktop && "w-72 h-72 blur-[150px] ml-8"
					} ${tablet && "w-60 h-60 blur-[170px] ml-8"}  left-0 `}
				>
					<div
						className={`${mobile && "w-36 h-36"} ${
							isDesktop && "w-72 h-72"
						} ${
							tablet && "w-60 h-60"
						} left-32 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full`}
					/>
				</div>
			</div>
			<div
				className={`${
					mobile && "h-auto"
				} w-[100vw] min-h-[100vh] flex justify-center items-center align-middle z-10 blur-0`}
			>
				<div className={`${(isDesktop | tablet) ? 'py-5 px-12': 'px-9 py-3'} flex flex-col h-fit w-full text-darkPurple font-rubik`}>
					{props.children}
				</div>
			</div>
		</div>
	);
}
