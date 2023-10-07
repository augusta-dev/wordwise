"use client"
import SplashScreen from "./SplashScreen";
import HomePage from "./homepage/page";
import Quiz from "./quiz/page";
import SignIn from "./signin/page";
import SignUp from "./signup/page";
import WordDisplay from "@/components/Dashboard/WordDisplay";
import Individualwords from "@/components/Dashboard/IndividualWords";
export default function Home() {
	
	return (
		<>
			<SplashScreen></SplashScreen>
			{/* <SignUp></SignUp>
			<SignIn></SignIn>
			<Quiz></Quiz> */}
			{/* <HomePage></HomePage> */}
			{/* <WordDisplay></WordDisplay> */}
			{/* <button className="w-10 h-10 bg-red" onClick={clickHandler}>Yes</button> */}
		</>
	);
}
