"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useState, useEffect, useContext } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import getServerSideProps from "../../components/WordList/listProps";
import EmailProvider from "../../components/EmailContext/EmailProvider";
import EmailContext from "../../components/EmailContext/EmailContext";
import ListProvider from "../../components/WordList/ListProvider";
import animation from "../../assets/animation.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const DashboardPage = () => {
	const { data: session } = useSession();
	const [isLoading, setIsLoading] = useState(true);
	const emailCtx = useContext(EmailContext);
	let userEmail = emailCtx.email;
	let [data, setData] = useState([]);
	async function getData(email) {
		const text = await getServerSideProps(email);
		const flipOrder = (list) => {
			let list2 = [];
			for (let i = 0; i < list.length; i++) {
				list2.push(list[list.length - 1 - i]);
			}
			list2.map((item) => {
				item.arrowUp = false;
			});
			list2[0].arrowUp = true;
			return list2;
		};
		const moddata = flipOrder(text);
		setData(moddata);
	}
	useEffect(() => {
		if (userEmail !== "") {
			let email = userEmail;
			setTimeout(
				(email) => {
					getData(email);
					setIsLoading(false);
				},
				2000,
				email,
			);
			setIsLoading(false);
		}
		if (session) {
			let email = session.user.email;
			setTimeout(
				(email) => {
					getData(email);
					setIsLoading(false);
				},
				2000,
				email,
			);
		}
	}, [session]);

	return (
		<EmailProvider>
			{isLoading && (
				<>
					<Player
						autoplay
						loop
						src={animation}
						style={{ height: "300px", width: "300px" }}
					></Player>
					<p className="text-purpleBody text-xl font-semibold text-center font-signika">
						Dashboard Loading...
					</p>
				</>
			)}
			{data.length > 0 && !isLoading && (
				<ListProvider words={data}>
					<Dashboard />
				</ListProvider>
			)}
		</EmailProvider>
	);
};
export default DashboardPage;
