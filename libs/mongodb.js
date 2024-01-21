import mongoose from "mongoose";
async function connectMongo () {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to mongodb successful");
	} catch (e) {
        console.log("Error connecting to Mongo")
	}
};
export default connectMongo;