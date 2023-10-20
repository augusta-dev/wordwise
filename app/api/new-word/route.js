// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
// 	"mongodb+srv://augusta_dev:<password>@clustermain.b28jfdb.mongodb.net/wordList?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         },
//     });
// export async function POST(req) {
// 		// try{
// 		// 	await client.connect();
// 		// 	await client.db("admin").commant({
// 		// 		ping: 1
// 		// 	})
// 		// 	console.log('yes')

// 		// }
// 		// finally{
// 		// 	await client.close();
// 		// }
// 	// if (req.method === "POST") {
// 		// const data = req.body;
// 		console.log("new");
		
// 		// const db = await client.db();
// 		// console.log(db);

// 		// const wordsCollection = db.collection("words");

// 		// const result = await wordsCollection.insertOne(data);
// 		// console.log(result);

// 		// client.close();
// 		res.status(200).send('Hello, World!');
// 		// res.status(201).json({ message: "Word added!" });
// 	// }
// 	// if (req.method === 'GET') {
// 		// res.status(201).json({ message: "Word added!" });

// 		console.log('result');
// 		// return({
// 		// 	message: 'Word added'
// 		// })
	
// }
// export { handler as GET,  handler as POST};

export async function POST(req){
	
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://augusta_dev:fcip%2BcDZh7MF%40K%3F@clustermain.b28jfdb.mongodb.net/words?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const res = await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return Response.json(res)
}
run().catch(console.dir);

}