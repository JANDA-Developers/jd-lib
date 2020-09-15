import React from 'react';
import { IProps, JDswitch } from '../src/components/switch/Switch';
import JDcontainer from '../src/components/container/Container';
import { useSwitch } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProps) => <JDswitch {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {
  label: '예제',
};

PrimaryStory.args = args;

export default {
  title: '기본/인풋/Switch',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Switch</Title>
          <Description>스위치 useSwitch로 핸들링 하세요.</Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const swithHook = useSwitch(false);
  return (
    <JDcontainer verticalPadding>
      <JDswitch {...swithHook} label="label" />
    </JDcontainer>
  );
};
