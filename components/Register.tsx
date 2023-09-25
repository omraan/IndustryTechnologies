import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db, fs } from "../firebase";

type RegisterData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

function Register() {
	const [registerData, setRegisterData] = useState<RegisterData>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			// Create a new user account with email and password
			const { user }: UserCredential = await createUserWithEmailAndPassword(
				auth,
				registerData.email,
				registerData.password
			);

			// Create a new Firestore entity for the user
			await setDoc(doc(fs, "users", user.uid), {
				firstName: registerData.firstName,
				lastName: registerData.lastName,
				email: registerData.email,
				type: "user",
			});

			// Set success message
			setSuccess(true);
			setError(null);
		} catch (error: any) {
			// Set error message
			switch (error.code) {
				case "auth/email-already-in-use":
					setError("This email address is already in use. Please try another one.");
					break;
				case "auth/weak-password":
					setError("The password is too weak. Please choose a stronger password.");
					break;
				default:
					setError("An error occurred. Please try again later.");
					break;
			}
			setSuccess(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{error && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5" role="alert">
					{error}
				</div>
			)}
			{success && (
				<div
					className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-5"
					role="alert"
				>
					Registration successful!
				</div>
			)}
			<div className="mb-5">
				<input
					type="text"
					className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
					value={registerData.firstName}
					onChange={(event) => setRegisterData({ ...registerData, firstName: event.target.value })}
					placeholder="First name"
				/>
			</div>
			<div className="mb-5">
				<input
					type="text"
					className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
					value={registerData.lastName}
					onChange={(event) => setRegisterData({ ...registerData, lastName: event.target.value })}
					placeholder="Last name"
				/>
			</div>
			<div className="mb-5">
				<input
					type="email"
					className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
					value={registerData.email}
					onChange={(event) => setRegisterData({ ...registerData, email: event.target.value })}
					placeholder="Email"
				/>
			</div>
			<div className="mb-5">
				<input
					type="password"
					className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
					value={registerData.password}
					onChange={(event) => setRegisterData({ ...registerData, password: event.target.value })}
					placeholder="Password"
				/>
			</div>
			<div className="mb-5">
				<input
					type="password"
					className="w-full rounded-md border border-gray-300 p-5 outline-none shadow-sm"
					placeholder="Repeat password"
				/>
			</div>
			<div>
				<button
					type="submit"
					disabled={success}
					className="p-5 bg-indigo-800 rounded-lg text-white w-full disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Register
				</button>
			</div>
		</form>
	);
}

export default Register;
