import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '@/widgets/Header/Header';
import { cn } from '@/shared/lib/classNames/classNames';
import './styles/global.scss';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'welbex',
	description: 'крупный интегратор CRM в Росcии и ещё 8 странах',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, [])}>
				<Header />
				{children}
			</body>
		</html>
	);
}
