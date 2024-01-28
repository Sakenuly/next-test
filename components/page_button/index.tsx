import Link from 'next/link';
import { ButtonText } from '@/app/const';

interface IPageButtonProps {
	text: ButtonText;
	path: string;
	currentPage: number;
	pagesCount: number;
}

function PageButton({ text, path, currentPage, pagesCount }: IPageButtonProps) {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === pagesCount;
	const isButtonPrev = text === ButtonText.PREV;
	const isButtonNext = text === ButtonText.NEXT;

	if (isFirstPage && isButtonPrev) return;
	if (isButtonNext && isLastPage) return;

	return (
		<Link className='page-link' href={path}>
			{text}
		</Link>
	);
}

export { PageButton };
