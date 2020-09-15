import React from 'react';
import { JDRadioBox, IProps } from '../src/components/radioButton/RadioButton';
import { useRadioButton } from '../src/hooks/hook';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const DUMMY_OPTIONS = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];

const Template = (args: Partial<IProps>) => {
  const userRadioHook = useRadioButton(['1', '2'], args.options);

  return <JDRadioBox {...userRadioHook} {...args} />;
};
export const PrimaryStory = Template.bind({});

const args: Partial<IProps> = {
  options: DUMMY_OPTIONS,
};

PrimaryStory.args = args;

export default {
  title: '기타/RadioButton',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>RadioButton</Title>
          <Description>
            RadioButton은 행동방식에 대한 정의를 프로퍼티로 받습니다.
            userRadioHook 의 첫번쨰 인자로 선택된 값들의 배열을 주세요.
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const radioBoxHook = useRadioButton(['1'], DUMMY_OPTIONS);

  return (
    <JDcontainer verticalPadding>
      <h6>Noraml</h6>
      <JDRadioBox {...radioBoxHook} />
      <h6>Border</h6>
      <JDRadioBox
        btnProps={{
          mode: 'border',
        }}
        {...radioBoxHook}
      />
      <h6>Gather</h6>
      <JDRadioBox mode="gather" {...radioBoxHook} />
      <h6>Only</h6>
      <JDRadioBox only {...radioBoxHook} />
      <h6>With All</h6>
      <JDRadioBox
        withAllTooglerLabel="전체투글"
        withAllToogler
        {...radioBoxHook}
      />
    </JDcontainer>
  );
};
