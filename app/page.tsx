import '@/app/global.scss';

import { PagesList } from '@/components/pages_list/page';

export default function Home() {
	return (
		<main className='list-wrapper'>
			<PagesList />
		</main>
	);
}
