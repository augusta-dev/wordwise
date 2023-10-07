import Logo from "../../components/UI/Logo";
import BeginIllustration from "../../assets/BeginIllustration";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Link from "next/link";
const SignUp = () => {
	return (
		<div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center mb-6">
				<p className="font-semibold text-darkPurple text-2xl leading-3 pb-8">
					Begin the journey!
				</p>

				<BeginIllustration />
			</div>
			<div>
				<Input
					type="text"
					placeholder="Enter your full name"
				/>
				<Input
					type="email"
					placeholder="Enter your email address"
				/>
				<Input
					type="password"
					placeholder="Enter your password"
				/>
				<Input
					type="password"
					placeholder="Confirm your password"
				/>{" "}
				<Button className='mt-6 mb-3'>Sign Up</Button>
				<Link href='/signin'>
				<Button className='mt-1'>Sign In Instead</Button>
				</Link>
			</div>
		</div>
	);
};
export default SignUp;
