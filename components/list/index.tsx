import { getTestApi } from '@/app/action';
import { Item } from '../item';

interface IListProps {
	page: number;
}

async function List({ page }: IListProps) {
	const data = await getTestApi(page);

	return (
		<div>
			<ul>
				{data.items.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}
export { List };
