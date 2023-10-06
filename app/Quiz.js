import QuizIllustration from "../assets/QuizIllustration";
import QuizOption from "../components/Quiz/QuizOption";
import LightBulb from "../assets/LightBulb";
const Quiz = () => {
    return (
        <div className="flex justify-between h-screen flex-col font-signika pb-10 pt-8 text-darkPurple">
            <div className="flex flex-wrap flex-col text-center justify-center align-middle items-center">
				<h2 className=" text-darkPurple text-4xl">
					Quiz Time
				</h2>
                <QuizIllustration />
			</div>
            <div>
                <p className="text-2xl leading-7">Do you remember the meaning of <span className="bg-orange text-white px-1 rounded-md">Virtuoso</span> ?</p>
            </div>
            <div className="grid gap-2">
                <QuizOption></QuizOption>
                <QuizOption></QuizOption>
                <QuizOption></QuizOption>
            </div>
            <div className="flex flex-row align-middle text-center justify-center">
               <LightBulb /> <p className="inline text-lg pl-2">It's okay to make mistakes</p>
            </div>
        </div>
    )
}
export default Quiz;