import React from 'react';
import JDcontainer from '../src/components/container/Container';
import SignUpUI, { IProps } from '../src/components/form/SignUpUI';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProps) => <SignUpUI {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProp = {
  loading: false,
};

PrimaryStory.args = args;

export default {
  title: '폼/SignUpUI',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>SignUp UI</Title>
          <Description>SignUp UI 유아이</Description>
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
  return <Template onSignUpClick={() => { }} />;
};
