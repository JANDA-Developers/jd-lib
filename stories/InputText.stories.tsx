import React, { useEffect } from 'react';
import {
  InputText,
  IInputTextCutsomProp,
} from '../src/components/InputText/InputText';
import JDcontainer from '../src/components/container/Container';
import { useInput } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IInputTextCutsomProp) => <InputText {...args} />;
export const PrimaryStory = Template.bind({});

const args: IInputTextCutsomProp = {};

PrimaryStory.args = args;

export default {
  title: 'InputText',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>InputText</Title>
          <Description>InputText 텍스트 모양 필드 (리뉴얼 필요)</Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const standard = () => {
  const textInputHook = useInput('');
  const numberInputHook = useInput(0);
  const commaInputHook = useInput(0);
  const nullInputHook = useInput(null);

  useEffect(() => {
    console.info(typeof commaInputHook.value);
  }, [commaInputHook.value]);

  useEffect(() => {
    console.info(typeof textInputHook.value);
  }, [textInputHook.value]);

  useEffect(() => {
    console.info(typeof numberInputHook.value);
  }, [numberInputHook.value]);

  return (
    <JDcontainer verticalPadding>
      <div>
        <InputText label="일반" />
      </div>
      <div>
        <InputText {...nullInputHook} label="Null HOOK" />
      </div>
      <div>
        <InputText {...numberInputHook} label="Number HOOK" />
      </div>
      <div>
        <InputText comma {...commaInputHook} label="Comma 넘버리턴" />
      </div>
      <div>
        <InputText {...textInputHook} label="Text HOOK" />
      </div>
      <div>
        <InputText br="round" Size="big" label="big" />
      </div>
    </JDcontainer>
  );
};
