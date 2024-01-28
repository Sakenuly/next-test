'use server';

import { API, ITestApiItem } from '@/app/const';

async function getTestApiItem(itemId: number = 1): Promise<ITestApiItem> {
	const url = `${API.ITEM}&id=${itemId}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export { getTestApiItem };
