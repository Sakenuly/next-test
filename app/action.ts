'use server';

import { API, ITestApiList } from './const';

async function getTestApi(page: number = 1): Promise<ITestApiList> {
	const url = `${API.LIST}&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export { getTestApi };
