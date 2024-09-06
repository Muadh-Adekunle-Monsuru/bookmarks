import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tidy Bookmarks',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={GeistSans.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
