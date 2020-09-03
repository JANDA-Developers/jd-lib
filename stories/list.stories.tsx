import React from 'react';
import List from '../src/components/list/List';
import JDcontainer from '../src/components/container/Container';

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<List
				mb="largest"
				lineHeight={1}
				contents={['lexicographicSortSchema', 'lexicographicSortSchema', 'lexicographicSortSchema']}
			/>
			<List
				mb="normal"
				lineHeight={2}
				contents={['lexicographicSortSchema', 'lexicographicSortSchema', 'lexicographicSortSchema']}
			/>
			<h6>3</h6>
			<List
				mb="normal"
				lineHeight={3}
				contents={['lexicographicSortSchema', 'lexicographicSortSchema', 'lexicographicSortSchema']}
			/>
			<h6>4</h6>
			<List
				mb="normal"
				lineHeight={4}
				contents={['lexicographicSortSchema', 'lexicographicSortSchema', 'lexicographicSortSchema']}
			/>
			<h6>stripe</h6>
			<List
				stripe
				lineHeight={2}
				contents={[
					'lexicographicSortSchema',
					'lexicographicSortSchema',
					'lexicographicSortSchema',
					'lexicographicSortSchema',
					'lexicographicSortSchema',
					'lexicographicSortSchema'
				]}
			/>
		</JDcontainer>
	);
};

export default {
	title: 'List',
	component: standard,
};

standard.story = {
	name: 'standard'
};
