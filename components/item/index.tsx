import { ITestApiItem } from '@/app/const';
import Link from 'next/link';
import './style.scss';

interface IItemProps {
	item: ITestApiItem;
}

function Item({ item: { id, name } }: IItemProps) {
	return (
		<li>
			<Link className='link' href={`/list/1/item/${id}`}>
				{name}
			</Link>
		</li>
	);
}

export { Item };
