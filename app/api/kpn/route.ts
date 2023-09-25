import { db } from "@/firebase";
import { child, get, ref, set, update } from "firebase/database";
import { NextRequest } from "next/server";

interface BodyContent {
	bn: string;
	bt: number;
	n: string;
	v?: string;
	vs: string;
	u: string;
}

interface PostBody {
	[key: string]: {
		[key: string]: {
			time: number;
			value: string;
			unit: string;
		};
	};
}

export async function POST(req: NextRequest) {
	const body: Record<string, BodyContent[]> = await req.json();
	const bodyContent = body[Object.keys(body)[0]];
	const device = bodyContent[0].bn;
	const time = bodyContent[0].bt;
	let postBody: PostBody = {};

	bodyContent.map(async (x: BodyContent, index: number) => {
		if (index > 0) {
			const kpnRef = child(ref(db), `kpn/${device}/${x.n}`);

			const snapshot = await get(kpnRef);
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

	return new Response(postBody.toString(), {
		status: 200,
	});
}
