import React, { useState } from 'react';
import JDcontainer from '../src/components/container/Container';
import LoginUi, { ILoginUiProp } from '../src/components/form/LoginUI';
import LoginUI2 from '../src/components/form/LoginUI2';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: ILoginUiProp) => <LoginUi {...args} />;
export const PrimaryStory = Template.bind({});

const args: ILoginUiProp = {
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

export const Login2 = () => {
  const [activate, setActivate] = useState<number>(1)
  return <LoginUI2 activeBookMark={activate} onBookMarkClick={(i) => {
    setActivate(i)
  }} />;
};
