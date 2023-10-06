const ReturnText = (props) => {
	const text = props.text;
	return (
		<span>
			{text.map((txt) => {
				return (
					<span>
						<span> {capitalizeInitial(txt)}</span>
						<span>
							{text.length - (text.indexOf(txt) + 1) !== 0 && (
								<span>, </span>
							)}
						</span>
					</span>
				);
			})}
		</span>
	);
};
const capitalizeInitial = (string) => {
	return string[0].toUpperCase() + string.slice(1);
};
export default ReturnText;
