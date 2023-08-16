import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import './styles/global.scss';
import Header from "@/widgets/Header/Header";

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'welbex',
	description: 'крупный интегратор CRM в Росcии и ещё 8 странах',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, [montserrat.className])}>
				<Header />
			{children}
			</body>
		</html>
	);
}
