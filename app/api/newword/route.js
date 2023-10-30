import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb"
import Word from "../../../models/words";

export async function POST(request) {
	try {
		const { title, description } = await request.json();
		await connectMongo();
		console.log(title, description);
		await Word.create({title, description});
		return NextResponse.json({ message: "Word created" }, { status: 201 });
	} catch (err) {
    console.log(err)
		return NextResponse.json({ message: err.message }, { status: 501});
	}
}
