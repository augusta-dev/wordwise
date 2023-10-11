import { options } from "@/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Dashboard from "../../components/Dashboard/Dashboard";

export default async function dashboard() {
	const session = await getServerSession(options);
	if (!session) {
        redirect('api/signin?callbackUrl=/dashboard')
    }
	return (
		<>
			{session ? (
				<Dashboard
					user={session?.user}
					pagetype={"dashboard"}
				/>
			) : (
				<h1>Please reconnect</h1>
			)}
		</>
	);
}
