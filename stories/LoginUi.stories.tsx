import React from 'react';
import JDcontainer from '../src/components/container/Container';
import LoginUi, { IProp } from '../src/components/form/LoginUI';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProp) => <LoginUi {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProp = {
  loading: false,
};

PrimaryStory.args = args;

export default {
  title: '폼/LoginUI',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Card</Title>
          <Description>Card 이펙트</Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export const Standard = () => {
  return <LoginUi />;
};
