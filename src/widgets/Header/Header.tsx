import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Logo, Telegram, Viber, Whatsapp } from '@/shared/assets';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './Header.module.scss';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={cn(cls.Header, [className])}>
			<figure className={cls.logo}>
				<Image src={Logo} alt="welbex" />
				<figcaption className={cn(cls.logoText, [montserrat.className])}>
					крупный интегратор CRM в Росcии и ещё 8 странах
				</figcaption>
			</figure>
			<nav className={cls.nav}>
				<AppLink appRoute={AppRoutes.SERVICE}>Услуги</AppLink>
				<AppLink appRoute={AppRoutes.WIDGETS}>Виджеты</AppLink>
				<AppLink appRoute={AppRoutes.INTEGRATIONS}>Интеграции</AppLink>
				<AppLink appRoute={AppRoutes.CASES}>Кейсы</AppLink>
				<AppLink appRoute={AppRoutes.CERTIFICATES}>Сертификаты</AppLink>
			</nav>
			<menu className={cls.menu}>
				<Link href="tel:+75555555555">+7 555 555-55-55</Link>
				<div className={cls.menuIcons}>
					<Link href="https://telegram-link">
						<Image src={Telegram} alt="Telegram" width={20} height={20} />
					</Link>
					<Link href="https://viber-link">
						<Image src={Viber} alt="Viber" width={20} height={20} />
					</Link>
					<Link href="https://whatsapp-link">
						<Image src={Whatsapp} alt="WhatsApp" width={20} height={20} />
					</Link>
				</div>
			</menu>
		</header>
	);
};

export default Header;
