/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";
// import { onDocumentCreated } from "firebase-functions/firestore";
import * as logger from "firebase-functions/logger";
import { onValueCreated } from "firebase-functions/v2/database";
import { onRequest } from "firebase-functions/v2/https";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// interface DeviceData {
// 	bn: string;
// 	bt: number;
// }
interface DeviceData {
	bn: string;
	bt: number;
}
interface SensorData {
	n: string;
	u: string;
	v?: string | number;
	vs?: string;
}

// interface PostBody {
// 	time: number;
// 	value: string;
// 	unit: string;
// }
initializeApp();
const database = admin.database();

export const helloWorld = onRequest((request, response) => {
	logger.info("Hello logs!", { structuredData: true });
	const data: (DeviceData | SensorData)[] = [
		{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586444 },
		{ n: "battery", u: "%", vs: "33.0" },
		{ n: "accelerationX", u: "m/s2", v: -0.13 },
		{ n: "accelerationY", u: "m/s2", v: 1.42 },
		{ n: "accelerationZ", u: "m/s2", v: 9.7 },
	];

	const deviceData: DeviceData[] = data.filter((item): item is DeviceData => "bn" in item && "bt" in item);

	const sensorData: SensorData[] = data.filter((item): item is SensorData => "n" in item && "u" in item);
	// const deviceData: DeviceData = data[0];

	// const device = initData[0].bn;
	const time = deviceData[0].bt;
	const postBody: { time: number; value: string | number; unit: string }[] = [];
	sensorData.slice(1).map(async (x: SensorData) => {
		postBody.push({
			time: time,
			value: x.v ? x.v : parseFloat(x.vs as string).toFixed(1),
			unit: x.u,
		});
	});

	response.send(postBody);
});
export const OnWrittenFunctionInstance = onValueCreated(
	{
		ref: "/kpn/{uid}",
		instance: "industry-technologies-default-rtdb",
		// This example assumes us-central1, but to set location:
		region: "europe-west1",
	},
	(event) => {
		const data = event.data.val();
		data.slice(1).map(async (x: SensorData) => {
			database
				.ref("data")
				.child(encodeURIComponent(data[0].bn))
				.child(encodeURIComponent(x.n))
				.child(encodeURIComponent(x.u))
				.child(data[0].bt)
				.set(x.v ? x.v : parseFloat(x.vs as string).toFixed(1));
		});
		database.ref("kpn").child(event.params.uid).remove();
	}
);
