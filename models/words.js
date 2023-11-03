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

const Word = mongoose.models.Word || mongoose.model("Word", wordSchema);
export default Word;
