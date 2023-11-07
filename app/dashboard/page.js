"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useState, useEffect, useContext } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import ArrayDissectioning from "../../components/Dashboard/arrayDissectioning";
import getServerSideProps from "../../components/WordList/listProps";
import EmailProvider from "../../components/EmailContext/EmailProvider";
import EmailContext from "../../components/EmailContext/EmailContext";
import ListContext from "../../components/WordList/ListContext";
import ListProvider from "../../components/WordList/ListProvider";
const DashboardPage = () => {
	const { data: session } = useSession();

	const emailCtx = useContext(EmailContext);
	//let email = emailCtx.email ;
	console.log(session)
	let email = ""
	//session.user.email;
	session ? (email = session.user.email) : null;

	let [data, setData] = useState([]);

	useEffect(() => {
		console.log(email);
		//let email = session.user.email;
		//if(email){
		async function getData() {
			//console.log(email);
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
		getData();
		//Add page animation before this renders
		//setTimeout(getData, 2000);
		//	}
	}, []);

	return (

		<EmailProvider>
			{data.length > 0 && (
				<ListProvider words={data}>
					<Dashboard />
				</ListProvider>
			)}
		</EmailProvider>
	);
};
export default DashboardPage;
