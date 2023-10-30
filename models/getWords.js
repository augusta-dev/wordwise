import mongoose from "mongoose";
const { Schema } = mongoose;

const listSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);
// const Word = mongoose.models.Word || mongoose.model("Word", wordSchema)

const List = mongoose.models.List || mongoose.model("List", listSchema)
export default List;
 