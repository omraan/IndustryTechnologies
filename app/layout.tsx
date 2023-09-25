import "./globals.css";
export const metadata = {
	title: "Industry Technologies",
	description: "Omraan Project",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-[#2d204f]">
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
