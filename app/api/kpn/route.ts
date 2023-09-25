import { db } from "@/firebase";
import { child, get, ref, set, update } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

interface PostBody {
	[key: string]: {
		[key: string]: {
			time: number;
			value: string;
			unit: string;
		};
	};
}

export async function GET(request: Request) {
	return NextResponse.json({ text: "test" }, { status: 200 });
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	const device = body[0].bn;
	const time = body[0].bt;
	let postBody: PostBody = {};
	let d;
	body.map(async (x: any, index: number) => {
		if (index > 0) {
			const kpnRef = child(ref(db), `kpn/${device}/${x.n}`);

			const snapshot = await get(kpnRef);
			d = snapshot;
			const data = snapshot.val();

			postBody[x.n] = {
				...data,
				[time]: {
					time: time,
					value: x.v ? x.v : parseFloat(x.vs).toFixed(1),
					unit: x.u,
				},
			};
			await update(kpnRef, postBody[x.n]);
		}
	});

	// const kpnRef = child(ref(db), `kpn/${device}/${body[4].n}`);
	// const snapshot = await get(kpnRef);
	return new Response(JSON.stringify({ d: postBody }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
