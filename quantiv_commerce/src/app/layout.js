import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header1 from "@/components/mvpblocks/header-1";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Quantiv",
	description: "E-commerce app",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Header1  />
				<main className="pt-16 lg:pt-20 ">{children}</main>
			</body>
		</html>
	);
}
