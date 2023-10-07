import Button from "../UI/Button";
import Link from "next/link";
const Authentication = () => {
	
	return (
		<div className="w-full flex flex-col">
			<Link href="/signin">
				<Button
					variant="contained"
					className="!mt-4 mb-2"
				>
					Sign in
				</Button>
			</Link>
			<Link href="/signup">
				<Button
					variant="contained"
					className="mt-2"
				>
					Sign up
				</Button>
			</Link>
		</div>
	);
};
export default Authentication;
