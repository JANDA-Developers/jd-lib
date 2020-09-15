import React from 'react';
import { JDcheckbox, IProps } from '../src/components/checkbox/CheckBox';
// @ts-ignore
import JDcontainer from '../src/components/container/Container';
import CheckBoxMini from '../src/components/checkbox/CheckBoxMini';
import { useCheckBox } from '../src/hooks/hook';
import {
  Description,
  Title,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProps) => <JDcheckbox {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {};

PrimaryStory.args = args;

export default {
  title: '기본/인풋/CheckBox',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>CheckBox</Title>
          <Description>
            CheckBox useCheckBox Hook과 함께 사용할수 있음
          </Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const checkBoxHook = useCheckBox(false);
  return (
    <JDcontainer verticalPadding>
      <JDcheckbox label="normal" {...checkBoxHook} />
      <JDcheckbox label="small" size="small" {...checkBoxHook} />
      <JDcheckbox label="tiny" size="tiny" {...checkBoxHook} />
    </JDcontainer>
  );
};

export const Mini = () => {
  const checkBoxHook = useCheckBox(false);
  return (
    <JDcontainer verticalPadding>
      <CheckBoxMini {...checkBoxHook} />
    </JDcontainer>
  );
};
