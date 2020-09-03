import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import JDcontainer from '../src/components/container/Container';
import SearchInput from '../src/components/searchInput/SearchInput';
import { ISearchViewData } from '../src/components/searchInput/DataModal';

export default {
	title: 'SearchInput',
	component: () => <div>?</div>,
};

const dummyData: ISearchViewData[] = [
	{
		id: 'banana',
		title: 'banana',
		describe:
			'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
		tag: 'fruit'
	},
	{
		id: 'Apple',
		title: 'Apple',
		describe: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California,.',
		tag: 'company'
	},
	{
		id: 'wallaby',
		title: 'wallaby',
		describe:
			'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'Dear',
		title: 'flower',
		describe:
			'A Dear is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'Flower',
		title: 'flower',
		describe:
			'A flower is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'Elephant',
		title: 'elephant',
		describe:
			'A elephant is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'Dragone',
		title: 'dragone',
		describe:
			'A dragone is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'wallaby',
		title: 'wallaby',
		describe:
			'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	},
	{
		id: 'wallaby',
		title: 'wallaby',
		describe:
			'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
		tag: 'animal'
	}
];

export const standard = () => {
	const [value, setValue] = useState('');

	return (
		<JDcontainer verticalPadding>
			<SearchInput
				onSelectData={action('onSelectData')}
				onSearchChange={v => {
					setValue(v);
				}}
				searchValue={value}
				head={'DummyData'}
				dataList={dummyData}
			/>
		</JDcontainer>
	);
};
export const empty = () => {
	const [value, setValue] = useState('');

	return (
		<JDcontainer verticalPadding>
			<SearchInput
				onSelectData={action('onSelectData')}
				onSearchChange={v => {
					setValue(v);
				}}
				enterBehavior="scroll"
				head={'DummyData'}
				dataList={[]}
				searchValue={value}
			/>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
empty.story = {
	name: 'empty'
};
