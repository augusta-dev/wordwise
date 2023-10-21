import mongoose from "mongoose";
export async function connect () {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to mongodb successful");
	} catch (e) {
		// throw new Error("Error connecting to Mongo");
        console.log("Error connecting to Mongo")
	}
};