import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import JDcontainer from '../src/components/container/Container';
import {
  SearchInput as JDsearchInput,
  IJDsearchInputProp,
} from '../src/components/searchInput/SearchInput';
import { ISearchViewData } from '../src/components/searchInput/DataModal';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Source,
} from '@storybook/addon-docs/blocks';
import IconSearchInput from '../src/components/searchInput/components/IconSearchInput';

const dummyData: ISearchViewData[] = [
  {
    id: 'banana',
    title: 'banana',
    describe:
      'A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
    tag: 'fruit',
  },
  {
    id: 'Apple',
    title: 'Apple',
    describe:
      'Apple Inc. is an American multinational technology company headquartered in Cupertino, California,.',
    tag: 'company',
  },
  {
    id: 'wallaby',
    title: 'wallaby',
    describe:
      'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'Dear',
    title: 'flower',
    describe:
      'A Dear is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'Flower',
    title: 'flower',
    describe:
      'A flower is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'Elephant',
    title: 'elephant',
    describe:
      'A elephant is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'Dragone',
    title: 'dragone',
    describe:
      'A dragone is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'wallaby',
    title: 'wallaby',
    describe:
      'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
  {
    id: 'wallaby',
    title: 'wallaby',
    describe:
      'A wallaby is a small or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand, the UK and other countries.',
    tag: 'animal',
  },
];

const Template = (args: Partial<IJDsearchInputProp>) => {
  const [value, setValue] = useState('');

  return (
    <JDcontainer verticalPadding>
      <JDsearchInput
        onSelectData={action('onSelectData')}
        onSearchChange={v => {
          setValue(v);
        }}
        searchValue={value}
        head={'DummyData'}
        dataList={dummyData}
        {...args}
      />
    </JDcontainer>
  );
};
export const PrimaryStory = Template.bind({});

const args: Partial<IJDsearchInputProp> = {
  dataList: dummyData,
};

PrimaryStory.args = args;

export default {
  title: '응용/SearchInput',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>SearchInput</Title>
          <Description>
            SearchInput으로 데이터를 쉽게 찾을수 있습니다.
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
          <Source
            code={`
  const Template = (args: Partial<IJDsearchInputProp>) => {
	const [value, setValue] = useState('');

	return (
		<JDcontainer verticalPadding>
			<JDsearchInput
				onSelectData={action('onSelectData')}
				onSearchChange={v => {
					setValue(v);
				}}
				searchValue={value}
				head={'DummyData'}
				dataList={dummyData}
				{...args}
			/>
		</JDcontainer>
	);
  }
			`}
          ></Source>
        </>
      ),
    },
  },
};

export const Empty = () => {
  const [value, setValue] = useState('');

  return (
    <JDcontainer verticalPadding>
      <JDsearchInput
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


export const CustomSearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <JDcontainer verticalPadding>
      <JDsearchInput
        SearchComponent={(prop) => <div>
          <IconSearchInput {...prop} />
        </div>}
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
