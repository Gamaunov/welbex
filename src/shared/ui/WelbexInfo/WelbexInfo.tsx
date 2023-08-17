import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { BallFooter } from '@/shared/assets';
import { cn } from '@/shared/lib/classNames/classNames';
import Decoration from '@/shared/ui/Decoration/Decoration';
import { Button } from '@/shared/ui/Button/Button';
import cls from './WelbexInfo.module.scss';

interface WelbexInfoProps {
	className?: string;
}

const montserrat = Montserrat({ subsets: ['cyrillic'] });

const WelbexInfo = ({ className }: WelbexInfoProps) => {
	return (
		<div className={cn(cls.WelbexInfo, [className])}>
			<Decoration className={cls.ball}>
				<Image src={BallFooter} alt="." />
			</Decoration>
			<h4 className={cls.title}>
				Вместе с{' '}
				<span className={cls.titleAccent}>бесплатной консультацией</span> мы
				дарим:
			</h4>
			<div className={cls.info}>
				<div className={cls.infoInner}>
					<h6 className={cls.infoTitle}>Виджеты</h6>
					<p className={cn(cls.infoText, [montserrat.className])}>
						30 готовых решений
					</p>
				</div>
				<div className={cls.infoInner}>
					<h6 className={cls.infoTitle}>Dashboard</h6>
					<p className={cn(cls.infoText, [montserrat.className])}>
						с показателями вашего бизнеса
					</p>
				</div>
				<div className={cls.infoInner}>
					<h6 className={cls.infoTitle}>Skype Аудит</h6>
					<p className={cn(cls.infoText, [montserrat.className])}>
						отдела продаж и CRM системы
					</p>
				</div>
				<div className={cls.infoInner}>
					<h6 className={cls.infoTitle}>35 дней</h6>
					<p className={cn(cls.infoText, [montserrat.className])}>
						использования CRM
					</p>
				</div>
			</div>
			<div className={cls.mobileInner}>
				<p className={cn(cls.mobileText, [montserrat.className])}>
					Skype аудит
				</p>
				<p className={cn(cls.mobileText, [montserrat.className])}>
					30 виджетов
				</p>
				<p className={cn(cls.mobileText, [montserrat.className])}>Dashboard</p>
				<p className={cn(cls.mobileText, [montserrat.className])}>
					Месяц аmoCRM
				</p>
			</div>
			<Button className={cls.btn}>Получить консультацию</Button>
		</div>
	);
};

export default WelbexInfo;
