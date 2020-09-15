import React from 'react';
import { Radio } from '../src/components/radio/Radio';
import JDcontainer from '../src/components/container/Container';
import { useRadio } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const Standard = () => {
  const radioHook = useRadio([
    { key: 'radio1', label: '바나나', value: 'banana' },
    { key: 'radio2', label: '딸기', value: 'strawberry' },
    { key: 'radio3', label: '사과', value: 'apple' },
  ]);

  return (
    <JDcontainer verticalPadding>
      <Radio {...radioHook} />
    </JDcontainer>
  );
};

export default {
  title: '기본/인풋/Radio',
  component: Standard,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Radio</Title>
          <Description>useRadio를 사용하여 핸들링 하세요</Description>
          <Primary />
          <ArgsTable of={Radio} />
        </>
      ),
    },
  },
};
