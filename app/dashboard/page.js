import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Dashboard from "../../components/Dashboard/Dashboard";
// import { redirect } from "next/dist/server/api-utils";

export default async function dashboard() {
	const session = await getServerSession(options);
	if (!session) {
        // redirect('api/signin?callbackUrl=/dashboard')
    }
	return (
		<>

				<Dashboard
					user={session?.user}
					pagetype={"dashboard"}
				/>
			
		</>
	);
}
