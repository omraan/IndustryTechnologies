import ChartComponent from "@/components/Chart";
import Header from "@/components/Header";
import Test from "@/components/Test";
import getRTDBData from "@/lib/GetRTDBData";

export default async function Home() {
	// const result = async () => {
	// 	const data = await getRTDBData("data");
	// 	return data;
	// };
	// const data = await result();

	// const chartComponents = Object.keys(data).flatMap((deviceId) => {
	// 	const deviceData = data[deviceId];
	// 	return Object.keys(deviceData).map((sensorType) => {
	// 		const sensorData = deviceData[sensorType];
	// 		const chartData = Object.entries(sensorData).map(([timestamp, value]) => ({
	// 			x: parseInt(timestamp),
	// 			y: parseFloat(value.value as string),
	// 		}));
	// 		return <ChartComponent key={`${deviceId}-${sensorType}`} data={chartData} />;
	// 	});
	// });

	return (
		<main className="">
			<Header />
			{/* <div className="grid grid-cols-2">
				{chartComponents.map((component, index) => (
					<div key={index} className="bg-white p-5 rounded-xl m-2">
						{component}
					</div>
				))}
			</div> */}
			<Test />
		</main>
	);
}
