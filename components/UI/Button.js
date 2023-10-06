const Button = (props) => {
	return (
		<>
			<button
				className={`${props.className} w-full h-fit py-1 rounded-3xl shadow-lg font-semibold text-lg mb-4 focus:shadow-inner bg-purpleBody text-white hover:bg-lightPurple mt-10`}
			>
				{props.children}
			</button>
		</>
	);
};
export default Button;
