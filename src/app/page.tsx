import AboutWelbex from '@/shared/ui/AboutWelbex/AboutWelbex';
import WelbexInfo from '@/shared/ui/WelbexInfo/WelbexInfo';

export default function Home() {
	return (
		<main>
			<section className="mainContent">
				<AboutWelbex />
				<WelbexInfo />
			</section>
		</main>
	);
}
