import SplashIllustration from "../../assets/SplashIllustration";
import Authentication from "../authentication/Authentication";
import Logo from "../components/UI/Logo";
const SplashScreen = () => {
	return (
		<>
			<SplashIllustration />
			<Logo />
			<div className="font-rubik font-semibold text-darkPurple text-justify leading-5 pb-5">
				<p>
					"The crux is in absorbing, not just accessing, the
					information at hand" is the motivation for and motto of this
					app.
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
			</div>
			<Authentication></Authentication>
		</>
	);
};
export default SplashScreen;
