import SplashIllustration from "../Components/UI/SplashIllustration";
import Authentication from "../Components/Authentication/Authentication";
// import Typography from '@mui/material';
import { Button, Typography, TextField, AppBar, Toolbar } from "@mui/material";
const SplashScreen = () => {
	return (
		<div className="w-[100vw] h-[100vh] flex justify-center items-center align-middle z-10 blur-0">
			<div className="flex flex-col h-fit px-9 w-[430px]">
				<SplashIllustration />
				<h2 className="font-squada text-5xl text-darkPurple pt-8">
					WordWise
				</h2>
				<h4 className="font-signika text-[1.71rem] text-lightPurple self-end leading-7 pb-6">
					Vocabulary Virtuoso
				</h4>
				<Typography className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-5">
					<p>
						&quot The crux is in absorbing, not just accessing, the
						information at hand &quot is the motivation for and motto of
						this app.
					</p>
					<p className="font-signika text-lg leading-4 pt-2">
						How It Works:
					</p>
					<p className="text-lightPurple ">
						You add words to your vocabulary and the app returns its
						meaning, translation and synonyms. It also quizes you on
						those words to help you remember them. You take one
						everytime you open the app
					</p>
				</Typography>
				<Authentication></Authentication>
			</div>
		</div>
	);
};
export default SplashScreen;
