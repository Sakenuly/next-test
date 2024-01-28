import Link from 'next/link';
import { getTestApiPages } from './action';

async function PagesList() {
	const { pages } = await getTestApiPages();
	const elements = Array.from({ length: pages }, (_, index) => {
		const page = index + 1;
		return (
			<li>
				<Link className='pages-link' href={`/list/${page}`} key={page}>
					Страница {page}
				</Link>
			</li>
		);
	});

	return <ul> {elements} </ul>;
}

export { PagesList };
