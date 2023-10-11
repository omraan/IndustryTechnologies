import Header from "@/components/Header";
export default function Home() {
	const data = [
		{ bn: "urn:dev:DVNUUID:1513bfb2-b495-494d-b8d8-9dead23190a3:", bt: 1695586444 },
		{ n: "battery", u: "%", vs: "33.0" },
		{ n: "accelerationX", u: "m/s2", v: -0.13 },
		{ n: "accelerationY", u: "m/s2", v: 1.42 },
		{ n: "accelerationZ", u: "m/s2", v: 9.7 },
	];
	console.log(data.slice(1));
	return (
		<main className="">
			<Header />
			<h1>Hello world</h1>
		</main>
	);
}
