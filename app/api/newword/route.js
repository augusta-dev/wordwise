import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb"
import Word from "../../../models/words";

export async function POST(request) {
	try {
		const { title, description } = await request.json();
		const desc = Object.entries(description)
		console.log(title, description.length);
		if (title === "" || desc.length === 0 ){return NextResponse.json({ message: "Word not valid" }, { status: 501})}
		await connectMongo();
		
		await Word.create({title, description});
		return NextResponse.json({ message: "Word created" }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ message: err.message }, { status: 501});
	}
}
