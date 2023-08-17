import AboutWelbex from '@/shared/ui/AboutWelbex/AboutWelbex';
import Decoration from '@/shared/ui/Decoration/Decoration';
import WelbexInfo from '@/shared/ui/WelbexInfo/WelbexInfo';

export default function Home() {
	return (
		<main>
			<section className="mainContent">
				<Decoration decorLeft />
				<AboutWelbex />
				<WelbexInfo />
			</section>
		</main>
	);
}
