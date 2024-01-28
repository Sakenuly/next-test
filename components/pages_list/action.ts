'use server';

import { API, ITestApiList } from '@/app/const';

async function getTestApiPages(): Promise<ITestApiList> {
	const url = `${API.LIST}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export { getTestApiPages };
