import mongoose, { Schema } from "mongoose";
const wordSchema = new Schema(
	{ title: String, description: Object },
	//  { description: Object },
	// { id: String },
	// { language: String },
	// { word: String },
	// { meaning: Array },
	// { meaning: Object },
	// { synonyms: Object },
	// { examples: Array },
	// { translation: Object },
	//  { arrowUp: true },
	{ timestamps: true },
);

const Word = mongoose.models.Post || mongoose.model("Post", wordSchema);
export default Word;
