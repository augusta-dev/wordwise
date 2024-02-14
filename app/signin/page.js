import SignInPage from "../../components/Signin/signInPage";
import EmailProvider from "../../components/EmailContext/EmailProvider";

const SignIn = () => {
	return (
		<EmailProvider>
			<SignInPage />
		</EmailProvider>
	);
};
export default SignIn;
