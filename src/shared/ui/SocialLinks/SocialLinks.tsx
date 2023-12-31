import Image from 'next/image';
import Link from 'next/link';
import { Telegram, Viber, Whatsapp } from '@/shared/assets';
import { cn } from '@/shared/lib/classNames/classNames';
import cls from './SocialLinks.module.scss';

interface SocialLinksProps {
	className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
	return (
		<div className={cn(cls.SocialLinks, [className])}>
			<Link href="https://t.me/id_0_0" target='_blank'>
				<Image
					className={cls.icon}
					src={Telegram}
					alt="Telegram"
					width={20}
					height={20}
				/>
			</Link>
			<Link href="https://viber-link" target='_blank'>
				<Image
					className={cls.icon}
					src={Viber}
					alt="Viber"
					width={20}
					height={20}
				/>
			</Link>
			<Link href="https://whatsapp-link" target='_blank'>
				<Image
					className={cls.icon}
					src={Whatsapp}
					alt="WhatsApp"
					width={20}
					height={20}
				/>
			</Link>
		</div>
	);
};

export default SocialLinks;
