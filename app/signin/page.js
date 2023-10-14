"use client";
import { useSearchParams } from "next/navigation";
import SignInPage from "../../components/Signin/signInPage";
const SignIn = () => {
	const searchParams = useSearchParams();
	console.log(searchParams.callbackUrl && searchParams.error);
	return (
		<SignInPage
			error={searchParams?.error}
			callbackUrl={'/dashboard'}
		/>
	);
};
export default SignIn;
