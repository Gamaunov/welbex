import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { BallBottom, BallTop, Logo } from '@/shared/assets';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import Decoration from '@/shared/ui/Decoration/Decoration';
import SocialLinks from '@/shared/ui/SocialLinks/SocialLinks';
import cls from './Header.module.scss';

const montserrat = Montserrat({ subsets: ['cyrillic'] });

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={cn(cls.Header, [className])}>
			<Decoration decorTop />
			<AppLink appRoute={AppRoutes.HOME}>
				<figure className={cls.logo}>
					<Image src={Logo} alt="welbex" />
					<figcaption className={cn(cls.logoText, [montserrat.className])}>
						крупный интегратор CRM в Росcии и ещё 8 странах
					</figcaption>
				</figure>
			</AppLink>
			<nav className={cls.nav}>
				<AppLink appRoute={AppRoutes.SERVICE}>Услуги</AppLink>
				<AppLink appRoute={AppRoutes.WIDGETS}>Виджеты</AppLink>
				<AppLink appRoute={AppRoutes.INTEGRATIONS}>Интеграции</AppLink>
				<AppLink appRoute={AppRoutes.CASES}>Кейсы</AppLink>
				<AppLink appRoute={AppRoutes.CERTIFICATES}>Сертификаты</AppLink>
				<Decoration className={cls.ballTop}>
					<Image src={BallTop} alt="." />
				</Decoration>
				<Decoration className={cls.ballBottom}>
					<Image src={BallBottom} alt="." />
				</Decoration>
			</nav>
			<menu className={cls.menu}>
				<Link href="tel:+75555555555">+7 555 555-55-55</Link>
				<SocialLinks />
			</menu>
		</header>
	);
};

export default Header;
