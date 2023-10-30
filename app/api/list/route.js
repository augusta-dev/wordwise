import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb"
import Word from "../../../models/words";

export async function GET (){
    try{
        await connectMongo();
        const list = await Word.find()
		return new NextResponse(JSON.stringify(list), {status: 200});
    }catch(error){
        return new NextResponse("Error in fetching list" + error, {status: 501})
    }
}