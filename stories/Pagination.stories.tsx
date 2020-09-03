import React from 'react';
import Pagination from '../src/components/pagination/Pagination';
import JDcontainer from '../src/components/container/Container';
import { usePagination } from '../src/hooks/hook';
import { DEFAULT_PAGINATION_SETTING } from '../src/types/defaults';

export default {
	title: 'Pagination',
	component: () => {
		const paginationHook = usePagination(2);

		return <Pagination {...paginationHook} {...DEFAULT_PAGINATION_SETTING} pageCount={20} />;
	},
};

export const standard = () => {
	const paginationHook = usePagination(1);
	//여기서 뽑은 페이지 데이터를 토대로 Query에 요청하면 됨
	return (
		<JDcontainer verticalPadding>
			<Pagination
				pageCount={20}
				previousLabel="이전"
				nextLabel="이후"
				{...paginationHook}
				{...DEFAULT_PAGINATION_SETTING}
			>
				Pagination Content
			</Pagination>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
