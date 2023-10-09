const Input = (props) => {
	return (
		<>
			<input
				className={`${props.className} w-full h-fit py-1 rounded-3xl shadow-lg font-semibold text-lg mb-4 placeholder:text-lightPurple text-center text-lightPurple focus:outline-none  focus:shadow-inner`}
				type={props.type}
				placeholder={props.placeholder} required
			/>
		</>
	);
};
export default Input;
