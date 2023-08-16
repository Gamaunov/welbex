import { Montserrat } from 'next/font/google';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './AboutWelbex.module.scss';

interface AboutWelbexProps {
	className?: string;
}

const montserrat = Montserrat({ subsets: ['cyrillic'] });

const AboutWelbex = ({ className }: AboutWelbexProps) => {
	return (
		<div className={cn('', [className])}>
			<h1 className={cls.title}>
				Зарабатывайте больше <span className={cls.titleAccent}>с WELBEX</span>
			</h1>
			<p className={cn(cls.titleInfo, [montserrat.className])}>
				Развиваем и контролируем продажи за вас
			</p>
		</div>
	);
};

export default AboutWelbex;
