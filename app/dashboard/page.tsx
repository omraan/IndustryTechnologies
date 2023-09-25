"use client";
import Header from "@/components/Header";
import { db } from "@/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect } from "react";

export default async function Home() {
	const testFunction = async () => {
		await fetch("/api/kpn", {
			method: "GET",
		}).then((response) => console.log(response.json()));
	};
	// useEffect(() => {
	// 	console.log("Querying database...");
	// 	const kpnRef = ref(db, "kpn");
	// 	onValue(
	// 		kpnRef,
	// 		(snapshot) => {
	// 			// Get the data from the snapshot
	// 			const data: Record<string, any> = snapshot.val();

	// 			// Combine the data into a single array
	// 			const combinedArr: { name: string; unit: string; value: number[] }[] = [];

	// 			for (const key in data) {
	// 				if (Object.prototype.hasOwnProperty.call(data, key)) {
	// 					// Get the list of names for the current key
	// 					const list: string[] = data[key].map((item: any) => item.n).filter(Boolean);

	// 					// Create an array of objects for the current key
	// 					const items = list.map((name: string) => {
	// 						const d = data[key].find((item: any) => item.n === name);
	// 						return { name: d.n, unit: d.u, value: d.v ? [d.v] : [d.vs] };
	// 					});

	// 					// Add the objects to the combined array
	// 					combinedArr.push(...items);
	// 				}
	// 			}

	// 			// Group the objects by name and unit
	// 			const groupedData: { [key: string]: { name: string; unit: string; value: number[] } } =
	// 				combinedArr.reduce((acc, curr) => {
	// 					const { name, unit, value } = curr;
	// 					const key = `${name}-${unit}`;

	// 					if (!acc[key]) {
	// 						acc[key] = { name, unit, value: [] };
	// 					}

	// 					acc[key].value.push(...value.filter(Boolean));
	// 					return acc;
	// 				}, {});

	// 			// Convert the grouped data into an array
	// 			const transformedData: { name: string; unit: string; value: number[] }[] = Object.values(groupedData);
	// 		},
	// 		(error) => {
	// 			console.log("Error retrieving data:", error);
	// 		}
	// 	);
	// }, []);
	const makeApiCall = async () => {
		const examplePostData = {
			// "-Nf7pI4eEnejKR1Uplui": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586529 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: 0.33 },
			// 	{ n: "accelerationY", u: "m/s2", v: 7.32 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 6.69 },
			// ],
			// "-Nf7pWuug10iEo_ZUztz": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586589 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: 0.21 },
			// 	{ n: "accelerationY", u: "m/s2", v: 7.19 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 6.64 },
			// ],
			// "-Nf7pkNfUn4GqUWS3NNi": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586649 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: -0.11 },
			// 	{ n: "accelerationY", u: "m/s2", v: 1.41 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 9.68 },
			// ],
			"-Nf7pz0Oj-VQgYEQX0hj": [
				{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586444 },
				{ n: "battery", u: "%", vs: "33.0" },
				{ n: "accelerationX", u: "m/s2", v: -0.13 },
				{ n: "accelerationY", u: "m/s2", v: 1.42 },
				{ n: "accelerationZ", u: "m/s2", v: 9.71 },
			],
			// "-Nf7qCmoD3twcD7MLPko": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586769 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: -0.16 },
			// 	{ n: "accelerationY", u: "m/s2", v: 1.42 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 9.71 },
			// ],
			// "-Nf7qRJE2ZwdwadpGQ9t": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586829 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: -0.14 },
			// 	{ n: "accelerationY", u: "m/s2", v: 1.41 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 9.7 },
			// ],
			// "-Nf7qf-0cXS5_sUrYN-e": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586889 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationX", u: "m/s2", v: -0.15 },
			// 	{ n: "accelerationY", u: "m/s2", v: 1.4 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 9.7 },
			// ],
			// "-Nf7qtc6vaYzdW2u9r1s": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586949 },
			// 	{ n: "battery", u: "%", vs: "33.0" },
			// 	{ n: "accelerationY", u: "m/s2", v: 6.69 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 4.4 },
			// ],
			// "-Nf7r7FZSL__vZT_yBoW": [
			// 	{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695587009 },
			// 	{ n: "battery", u: "%", vs: "32.0" },
			// 	{ n: "accelerationY", u: "m/s2", v: -2.54 },
			// 	{ n: "accelerationZ", u: "m/s2", v: 9.35 },
			// ],
		};
		console.log(JSON.stringify(examplePostData));
		await fetch("/api/kpn", {
			method: "POST",
			body: JSON.stringify(examplePostData),
		});
	};
	return (
		<main className="">
			<Header />
			<h1>Hello world</h1>
			<button onClick={testFunction}>Click GET</button>
			<button onClick={makeApiCall}>Click POST</button>
		</main>
	);
}
