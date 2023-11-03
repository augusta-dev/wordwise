import { NextResponse } from "next/server";
import connectMongo from "../../../libs/mongodb";
import Word from "../../../models/words";
import { parse } from "url";

export async function GET(request) {
	try {
		const res = new URLSearchParams(request.url);
		const query = parse(request.url, true);
		const email = query.query.email;
		await connectMongo();
		const list = await Word.find({
			$or: [
				{ "description.owner.email": email },
				{ "description.owner.email": { $exists: false } },
			],
		});
		return new NextResponse(JSON.stringify(list), { status: 200 });
	} catch (error) {
		return new NextResponse("Error in fetching list" + error, {
			status: 501,
		});
	}
}
