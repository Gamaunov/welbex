import { ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './Decoration.module.scss';

interface BallProps {
	className?: string;
	children?: ReactNode;
	decorLeft?: boolean;
	decorTop?: boolean;
}

const Decoration = ({
	className,
	children,
	decorLeft,
	decorTop,
}: BallProps) => {
	return (
		<div
			className={cn(cls.Ball, [
				className,
				decorLeft ? cls.decorLeft : '',
				decorTop ? cls.decorTop : '',
			])}
		>
			{children}
		</div>
	);
};

export default Decoration;
