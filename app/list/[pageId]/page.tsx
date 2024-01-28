import '@/app/global.scss';
import { getTestApi } from '@/app/action';
import { ButtonText } from '@/app/const';
import { Item } from '@/components/item';
import { PageButton } from '@/components/page_button';

interface IListIdProps {
	params: {
		pageId: string;
	};
}

async function ListId({ params: { pageId } }: IListIdProps) {
	const { items, page, pages } = await getTestApi(Number(pageId));
	const nextPage = page + 1;
	const prevPage = page - 1;

	return (
		<div className='list-wrapper'>
			<ul>
				{items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
			<PageButton
				text={ButtonText.PREV}
				path={`/list/${prevPage}`}
				currentPage={page}
				pagesCount={pages}
			/>
			<PageButton
				text={ButtonText.BACK}
				path='/'
				currentPage={page}
				pagesCount={pages}
			/>
			<PageButton
				text={ButtonText.NEXT}
				path={`/list/${nextPage}`}
				currentPage={page}
				pagesCount={pages}
			/>
		</div>
	);
}
export default ListId;
