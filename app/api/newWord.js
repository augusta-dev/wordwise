import { MongoClient } from "mongodb";

async function newWord(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			'mongodb+srv://<username>:<password>@clustermain.b28jfdb.mongodb.net/wordList?retryWrites=true&w=majority',
		);
		const db = client.db();
        console.log(db)

		const wordsCollection = db.collection("words");

		const result = await wordsCollection.insertOne(data);
		console.log(result);

		client.close();

		res.status(201).json({ message: "Word added!" });
	}
}
export default newWord;
