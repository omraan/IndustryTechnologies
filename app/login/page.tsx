"use client";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { useCallback, useState } from "react";

interface Form {
	name: string;
	text: string;
	obj: JSX.Element;
}

const forms: Form[] = [
	{
		name: "login",
		text: "Login",
		obj: <Login />,
	},
	{
		name: "register",
		text: "Register",
		obj: <Register />,
	},
];

export default function Home() {
	const [activeForm, setActiveForm] = useState<string>("login");
	const handleTabClick = useCallback(
		(name: string) => {
			setActiveForm(name);
		},
		[setActiveForm]
	);

	return (
		<main className="">
			<Header />
			<div className="flex flex-col md:flex-row items-center p-5 mb-3">
				<div className="flex items-center space-x-5 flex-1 justify-between w-full h-">
					<div className="w-full max-w-md bg-white rounded-md mx-auto p-5 shadow-xl">
						<div className="w-full justify-center text-center grid grid-cols-2 mt-2 mb-6 divide-x">
							{forms.map((form, index) => (
								<div key={index}>
									<span
										className={`text-lg ${
											activeForm === form.name
												? "text-gray-700 font-bold"
												: "text-gray-500 hover:font-bold hover:text-gray-700 hover:cursor-pointer"
										}`}
										onClick={() => handleTabClick(form.name)}
									>
										{form.text}
									</span>
								</div>
							))}
						</div>
						{forms.find((form) => form.name === activeForm)?.obj}
					</div>
				</div>
			</div>
		</main>
	);
}
