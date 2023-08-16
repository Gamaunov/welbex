import Link from 'next/link';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import SocialLinks from '@/shared/ui/SocialLinks/SocialLinks';
import cls from './Footer.module.scss';

interface FooterProps {
	className?: string;
}

const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={cn(cls.Footer, [className])}>
			<div className={cls.about}>
				<h6 className={cls.title}>О компании</h6>
				<AppLink appRoute={AppRoutes.PARTNERSHIP}>
					Партнёрская программа
				</AppLink>
				<AppLink appRoute={AppRoutes.VACANCIES}>Вакансии</AppLink>
			</div>

			<div className={cls.menu}>
				<h6 className={cls.title}>Меню</h6>
				<div className={cls.linkInner}>
					<div className={cls.block}>
						<AppLink appRoute={AppRoutes.CALCULATE_PRICE}>
							Расчёт стоимости
						</AppLink>
						<AppLink appRoute={AppRoutes.SERVICE}>Услуги</AppLink>
						<AppLink appRoute={AppRoutes.WIDGETS}>Виджеты</AppLink>
						<AppLink appRoute={AppRoutes.INTEGRATIONS}>Интеграции</AppLink>
						<AppLink appRoute={AppRoutes.OUR_CLIENTS}>Наши клиенты</AppLink>
					</div>
					<div className={cls.block}>
						<AppLink appRoute={AppRoutes.OUR_CLIENTS}>Кейсы</AppLink>
						<AppLink appRoute={AppRoutes.OUR_CLIENTS}>
							Благодарственные письма
						</AppLink>
						<AppLink appRoute={AppRoutes.OUR_CLIENTS}>Сертификаты</AppLink>
						<Link href={AppRoutes.OUR_CLIENTS}>Блог на Youtube</Link>
						<AppLink appRoute={AppRoutes.OUR_CLIENTS}>Вопрос / Ответ</AppLink>
					</div>
				</div>
			</div>
			<div className={cls.contacts}>
				<h6 className={cls.title}>Контакты</h6>
				<Link href="tel:+75555555555">+7 555 555-55-55</Link>
				<SocialLinks />
				<span className={cls.address}>Москва, Путевой проезд 3с1, к 902</span>
				<div className={cls.policyInner}>
					<span>©WELBEX 2022. Все права защищены.</span>
					<AppLink className={cls.policy} appRoute={AppRoutes.PRIVACY_POLICY}>
						Политика конфиденциальности
					</AppLink>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
