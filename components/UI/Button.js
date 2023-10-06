const Button = (props) => {
	return (
		<>
			<button
				className={` w-full h-fit py-1 rounded-3xl shadow-lg font-semibold text-lg mb-4 focus:shadow-inner bg-purpleBody text-white hover:bg-lightPurple mt-10 ${props.className}`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
