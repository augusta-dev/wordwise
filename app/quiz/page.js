import { getServerSession } from "next-auth";
import Quiz from "../../components/Quiz/Quiz";
import { redirect } from 'next/navigation';

export default async function quiz() {
	return (
		<>
			
				<Quiz
					pagetype={"quiz"}
				/>
		
		</>
	);
}
