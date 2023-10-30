import Dashboard from "../../components/Dashboard/Dashboard";
import ArrayDissectioning from "../../components/Dashboard/arrayDissectioning";
import ListProvider from "../../components/WordList/ListProvider";
import getServerSideProps from "../../components/WordList/listProps";
async function DashboardPage() {
	let data = await getServerSideProps();
	const flipOrder = (list) => {
		let list2 = [];
		for (let i = 0; i < list.length; i++) {
			list2.push(list[list.length - 1 - i]);
		}
		return list2;
	};
	data = flipOrder(data);
	console.log(data);

	return (
		<>
			<ListProvider words={data}>
				<Dashboard />
			</ListProvider>

			{/* <ArrayDissectioning></ArrayDissectioning> */}
		</>
	);
}
export default DashboardPage;
