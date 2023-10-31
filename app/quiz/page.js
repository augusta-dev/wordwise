import { getServerSession } from "next-auth";
import Quiz from "../../components/Quiz/Quiz";
import { redirect } from 'next/navigation';

export default async function quiz() {
	// const session = await getServerSession(options);
    // if (!session) {
    //     redirect('api/signin?callbackUrl=/quiz')
    // }
	return (
		<>
			
				<Quiz
					pagetype={"quiz"}
				/>
		
		</>
	);
}
