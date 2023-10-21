import { NextResponse } from "next/server";
import connect from "../../../db";
import Topic from "../../../models/post";

export async function POST(req) {
	try {
		const { title } = await req.json();
		await connect();
		console.log(title);
		await Topic.create({ title });
		return NextResponse.json({ message: "Topic created" }, { status: 201 });
	} catch (err) {
    console.log(err)
		return NextResponse.json({ message: err.message }, { status: 501});
	}
}
