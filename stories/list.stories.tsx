import React from 'react';
import List, { IProps, JDlist } from '../src/components/list/List';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const DUMMY_LIST = [
  'lexicographicSortSchema',
  'lexicographicSortSchema',
  'lexicographicSortSchema',
  'lexicographicSortSchema',
  'lexicographicSortSchema',
  'lexicographicSortSchema',
];

const Template = (args: IProps) => <JDlist {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {
  contents: DUMMY_LIST,
};

PrimaryStory.args = args;

export const tandard = () => {
  return (
    <JDcontainer verticalPadding>
      <List
        mb="largest"
        lineHeight={5}
        contents={[
          'Apple',
          'Banna',
          'potato',
        ]}
      />
      <List
        mb="largest"
        lineHeight={8}
        contents={[
          'Apple',
          'Banna',
          'potato',
        ]}
      />
      <List
        stripe
        lineHeight={4}
        contents={[
          'Apple',
          'Banna',
          'potato',
          'strawberry',
        ]}
      />
    </JDcontainer>
  );
};
export default {
  title: '임시/List',
};
