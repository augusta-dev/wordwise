import Button from "../UI/Button";
import Link from "next/link";
import Input from '../UI/Input'
import Form from next
const Authentication = () => {
	return (
		<Form>
			<Input
				className="text-lightPurple bg-white"
				placeholder="Enter your email address"
				type="email"
			>
				Enter your email address
			</Input>
			<Input
				className="text-lightPurple bg-white"
				type="password"
				placeholder="Enter your password"
			/>
		</Form>
	);
};
export default Authentication;
