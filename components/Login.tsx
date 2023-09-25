"use client";
import { useEffect, useState } from "react";

type LoginData = {
	name: string;
	password: string;
};

function Login() {
	const [loginData, setLoginData] = useState<LoginData>({
		name: "",
		password: "",
	});

	useEffect(() => {
		console.log(loginData);
	}, [loginData]);

	// async function handleSubmit(event: FormEvent<HTMLFormElement>) {
	// 	event.preventDefault();

	// 	const formData = new FormData(event.currentTarget);
	// 	// const response = await fetch('/api/submit', {
	// 	//   method: 'POST',
	// 	//   body: formData,
	// 	// })

	// 	// // Handle response if necessary
	// 	// const data = await response.json()
	// 	// // ...
	// }

	return (
		<>
			<form>
				<div className="mt-2">
					<div className="mb-5">
						<input
							type="text"
							className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
							onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
							placeholder="Username"
						/>
					</div>
					<div className="mb-5">
						<input
							type="password"
							className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
							onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
							placeholder="Password"
						/>
					</div>
					`
					<div>
						<button type="submit" className="p-5 bg-indigo-800 rounded-lg text-white w-full">
							Log in
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default Login;
