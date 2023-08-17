import Image from 'next/image';
import { Loader } from '@/shared/assets';

export default function Loading() {
	return <Image className="loader" src={Loader} alt="загружаем" />;
}
