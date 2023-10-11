import { options } from "@/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Quiz from "../../components/Quiz/Quiz";
import { redirect } from 'next/naviagtion';

export default async function quiz() {
	const session = await getServerSession(options);
    if (!session) {
        redirect('api/signin?callbackUrl=/quiz')
    }
	return (
		<>
			{session ? (
				<Quiz
					user={session?.user}
					pagetype={"quiz"}
				/>
			) : (
				<h1>Please reconnect</h1>
			)}
		</>
	);
}
