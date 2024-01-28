import '@/app/global.scss';
import Link from 'next/link';
import { getTestApiItem } from './action';

interface IListIdProps {
	params: {
		id: string;
	};
}

async function ListId({ params: { id } }: IListIdProps) {
	const data = await getTestApiItem(Number(id));
	return (
		<div className='popup'>
			<p className='popup__text'> {data.name}</p>
			<Link className='popup__link' href='/list/1'>
				Вернуться
			</Link>
		</div>
	);
}
export default ListId;
