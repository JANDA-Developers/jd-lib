import { IselectedOption } from '../types/interface';

export const selectOpCreater = ({
	count,
	labelAdd = '',
	start = 0
}: {
	count: number;
	start?: number;
	labelAdd?: string;
}): IselectedOption<number>[] => {
	return Array(count).fill(0).map((_, index) => ({
		label: `${index + start}${labelAdd}`,
		value: index + start
	}));
};

export function enumToOption<T, D extends keyof T>(LANG: any, key: string, value: T, nullable?:boolean): IselectedOption<D>[] {
	let result: IselectedOption<D>[] = [];

	if(nullable)
		result.push({
			label: "Select",
			value: null as any
		});

	for (const key2 in value) {
		const label = LANG(key, key2);
		if (!label) {
			console.error(key + ' In LANG ' + key2 + ' Is not exsist');
			continue;
		}
		result.push({
			label,
			value: value[key2] as any
		});
	}

	return result;
}
