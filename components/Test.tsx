"use client";
import { db } from "@/firebase";
import firebase from "firebase/app";
import "firebase/database";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

function Test() {
	const kpnRef = ref(db, "data");
	const [data, setData] = useState({});

	useEffect(() => {
		const listener = onValue(
			kpnRef,
			(snapshot) => {
				// Get the data from the snapshot
				const result: Record<string, any> = snapshot.val();
				const newData = result[Object.keys(result)[0]];
				if (newData !== data) {
					setData(result[Object.keys(result)[0]]);
				}
				return result[Object.keys(result)[0]];
			},
			(error) => {
				console.log("Error retrieving data:", error);
			}
		);

		return () => {
			// Unsubscribe the listener when the component unmounts
			listener();
		};
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return <div>Test</div>;
}

export default Test;
