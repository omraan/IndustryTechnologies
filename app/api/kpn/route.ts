import { db } from "@/firebase";
import { child, get, getDatabase, onValue, ref, set, update } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
	const kpnRef = ref(db, "kpn");

	const data = await onValue(
		kpnRef,
		(snapshot) => {
			// Get the data from the snapshot
			const data: Record<string, any> = snapshot.val();
			return data[Object.keys(data)[0]];
		},
		(error) => {
			console.log("Error retrieving data:", error);
		}
	);
	console.log(data);
	return NextResponse.json({ data: data }, { status: 200 });
}
