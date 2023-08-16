'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface customLinkProps {
	className?: string;
	children?: ReactNode;
	appRoute: AppRoutes;
}

export const AppLink = ({ className, children, appRoute }: customLinkProps) => {
	const pathname = usePathname();

	return (
		<Link
			className={cn('', [
				className,
				pathname === appRoute ? cls.disableEvents : '',
			])}
			href={appRoute}
		>
			{children}
		</Link>
	);
};
