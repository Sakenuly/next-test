interface ITestApiList {
	result: number;
	pages: number;
	page: number;
	items: ITestApiItem[];
}
interface ITestApiItem {
	id: number;
	name: string;
}

const apiUrl = 'https://taxivoshod.ru/testapi/';
const API = {
	LIST: `${apiUrl}?w=list`,
	ITEM: `${apiUrl}?w=item`,
};

enum ButtonText {
	NEXT = 'Вперед',
	PREV = 'Назад',
	BACK = 'В главное меню',
}

export { apiUrl, API, ButtonText };
export type { ITestApiList, ITestApiItem };
