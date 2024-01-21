import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb";
import User from "../../../models/userProfiles";

export async function POST(request) {
	try {
		const { userName, email, password } = await request.json();
		await connectMongo();
		const check = await User.findOne({ email });
		if (check) return;
		await User.create({ userName, email, password });
		return NextResponse.json({ message: "User created" }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: err.message }, { status: 501 });
	}
}
