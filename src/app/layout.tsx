import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WhatsApp Clone",
	description: "Introducing your innovative WhatsApp clone, a dynamic chat application designed for seamless communication and enriched with cutting-edge features. Built using the powerful tech stack of Next.js 14, TypeScript, TailwindCSS, and Convex, this app ensures a smooth and responsive user experience. With secure authentication handled by Clerk, users can effortlessly create private and group chats while staying informed about others' online or offline status. Group admins have the authority to manage memberships by kicking users out if necessary.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<ConvexClientProvider>
						{children}
						<Toaster />
					</ConvexClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
