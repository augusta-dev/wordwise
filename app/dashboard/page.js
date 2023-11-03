"use client";
import Dashboard from "../../components/Dashboard/Dashboard";
import ArrayDissectioning from "../../components/Dashboard/arrayDissectioning";
import ListProvider from "../../components/WordList/ListProvider";
import getServerSideProps from "../../components/WordList/listProps";
import { SessionProvider, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const DashboardPage = () => {
	const { data: session } = useSession();
	let email = "";
	let [data, setData] = useState([]);
	session ? (email = session.user.email) : null;
	useEffect(() => {
		async function getData() {
			const text = await getServerSideProps(email);
			const flipOrder = (list) => {
				let list2 = [];
				for (let i = 0; i < list.length; i++) {
					list2.push(list[list.length - 1 - i]);
				}
				list2.map((item) => {
					item.arrowUp = false;
				});
				//list2[0].arrowUp = true;
				return list2;
			};
			const moddata = flipOrder(text);
			setData(moddata);
		}
		getData();
	}, [session, email]);

	return (
		<>
			{data.length > 0 && (
				<ListProvider words={data}>
					<Dashboard />
				</ListProvider>
			)}
		</>
	);
};
export default DashboardPage;
