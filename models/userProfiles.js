import mongoose from "mongoose";
const  { Schema } = mongoose;
const userSchema = new Schema(
	{
		userName: String,
		email:  String,
		password:  String,
	},
	{ timestamps: true },
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;