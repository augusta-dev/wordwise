import mongoose, { Schema } from "mongoose";
const wordSchema = new Schema(
    {
        title: String, 
    }, 
    {
        timestamps: true,
    }
);

const Word = mongoose.models.Word || mongoose.model("Word", wordSchema)
export default Word;