
import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb"
import Word from "../../../models/words";
import {parse} from 'url'

export async function GET (request){
    try{
        // console.log(request)
        const res = new URLSearchParams(request.url)
        // let query = res.values()
        //  const req = request.search
        // console.log(query)

        const query  = parse(request.url, true);
        const email = query.query.email;
        console.log(query.query.email)
        // const { email } = req.email;
        //  console.log(email);
        await connectMongo();
        //const list = await Word.find()
        console.log(Word.find())
        const list = await Word.find({
            $or: [
              { "description.owner.email": email },
              { "description.owner.email": { $exists: false } }
            ]
          });
        
		return new NextResponse(JSON.stringify(list), {status: 200});
    }catch(error){
        return new NextResponse("Error in fetching list" + error, {status: 501})
    }
}