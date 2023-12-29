// import type { Metadata } from 'next'
// import { Inter, Ubuntu } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// const ubuntu = Ubuntu({
//   weight: ["300", "400", "500", "700"],
//   subsets: ['latin']
// })

// export const metadata: Metadata = {
//   title: 'Radio Ads',
//   description: 'With radio advertising, you get the opportunity to showcase your brand on the local radio service platform. Track And Analyze Your Radio Ad Campaign ',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={ubuntu.className}>{children}</body>
//     </html>
//   )
// }
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Divider } from "@nextui-org/react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased" ,
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl flex-grow">
							{children}
						</main>
            <Divider className="my-4" />
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href={siteConfig.links.github}
								title="Nrdout"
							>
                
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">Nrdout</p>
							</Link>
              
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}