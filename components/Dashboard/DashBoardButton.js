import Image from "next/image";

const DashBoardButton = (props) => {
	return (
		<button
			className={`${
				props.className
			}  h-fit rounded-lg px-3 py-2 text-[12px] text-left ${
				props.desktop && "flex items-center leading-5"
			}`}
			onClick={props.onClick}
		>
			<Image
				src={props.icon}
				alt=""
				className={`${
					props.desktop && "h-6 w-4 mr-2"
				} inline h-4 relative -top-[3px]`}
			/>
			<p className={`${props.desktop && 'leading-[13px] px-auto '} inline relative pl-[2px] -top-[2px]`}>{props.text}</p>
		</button>
	);
};
export default DashBoardButton;
