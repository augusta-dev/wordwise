import Logo from "../../components/UI/Logo";
import Button from "../../components/UI/Button";
import Raindrops from "../../components/Signin/Raindrops";
import "../../components/Signin/Raindrops.css";
import Input from "../../components/UI/Input";
import Link from "next/link";
import Droplet from "@/components/Signin/Droplet";
import Authentication from "../../components/authentication/SinAuthentication";

const SignIn = () => {
	return (
		<div className="flex justify-between h-screen flex-col font-rubik pb-14">
			<Logo></Logo>
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center">
				<p className="font-semibold text-darkPurple text-2xl leading-3 relative">
					Continue the journey!
				</p>
				{/* <Droplet></Droplet> */}
				<div className="h-48 w-60 grid grid-cols-6 justify-evenly pl-3">
					<Raindrops className="duration-1" />
					<Raindrops className="duration-2" />
					<Raindrops className="duration-3" />
					<Raindrops className="duration-4" />
					<Raindrops className="duration-5" />
					<Raindrops className="duration-6" />
				</div>
			</div>

			<div className="pb-8">
				<>
					<Authentication />

					
				</>

				<Link href="/signup">
					<Button className="!mt-2"> Sign Up Instead</Button>
				</Link>
			</div>
		</div>
	);
};
export default SignIn;
