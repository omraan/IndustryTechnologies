import { db } from "@/firebase";
import { onValue, ref } from "firebase/database";

const getRTDBData = async (path: string) => {
	const rtdbRef = ref(db, path);
	return new Promise((resolve, reject) => {
		onValue(
			rtdbRef,
			(snapshot) => {
				const data: Record<string, any> = snapshot.val();
				resolve(data);
			},
			(error) => {
				reject(error);
			}
		);
	});
};

export default getRTDBData;
