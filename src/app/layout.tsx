import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense, lazy } from 'react';
import Header from '@/widgets/Header/Header';
import { cn } from '@/shared/lib/classNames/classNames';
import ErrorBoundary from '@/shared/ui/ErrorBoundary/ErrorBoundary';
import './styles/global.scss';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	title: 'welbex',
	description: 'крупный интегратор CRM в Росcии и ещё 8 странах',
	icons: {
		icon: ['/favicon.ico?v=1'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
	manifest: '/site.webmanifest',
};

const LazyFooter = lazy(() => import('@/widgets/Footer/Footer'));

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(inter.className, [])}>
				<Header />
				<Suspense fallback="">
					<ErrorBoundary>{children}</ErrorBoundary>
				</Suspense>
				<Suspense fallback="">
					<LazyFooter />
				</Suspense>
			</body>
		</html>
	);
}
