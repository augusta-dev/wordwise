import Button from "../UI/Button";
import Link from "next/link";
const Authentication = () => {
	const revealSignIn = () => {
		alert("Yes");
	};

	return (
		<div className="w-full flex flex-col">
			<Link href="/homepage">
				<Button
					variant="contained"
					className="mt-0 mb-4"
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
