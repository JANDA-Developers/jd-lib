import React from 'react';
import {
  PasswordFinder,
  IProps,
} from '../src/components/passwordFinder/PasswordFinder';
import { useModal } from '../src/hooks/hook';
import JDbutton from '../src/components/button/Button';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: Partial<IProps>) => () => {
  const modalHook = useModal(true);
  return (
    <>
      <JDbutton onClick={modalHook.openModal} label="뛰우기" />
      <PasswordFinder
        startChangeCallBack={param => {
          console.log(param);
        }}
        completeChangeCallBack={info => {
          console.log(info);
        }}
        modalHook={modalHook}
        {...args}
      />
    </>
  );
};
const PrimaryStory = Template.bind({});

const args: Partial<IProps> = {};

PrimaryStory.args = args;

export default {
  title: '응용/PasswordFinder',
  component: PrimaryStory,
  decorators: [(Story: any) => <div>{Story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>PasswordFinder</Title>
          <Description>
            PasswordFinder 는 패스워드 및 이메일 재설정에 필요한 기능들을
            함축하고 있는 UI 번들 입니다.
          </Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const PasswordFind = () => {
  const modalHook = useModal();

  return (
    <div>
      <JDbutton
        thema="primary"
        onClick={() => {
          modalHook.openModal();
        }}
      >
        변경하기
      </JDbutton>
      <PasswordFinder
        requireField={{
          email: true,
          password: true,
        }}
        modalHook={modalHook}
        startChangeCallBack={param => {
          console.info(param);
        }}
        completeChangeCallBack={param => {
          console.info(param);
        }}
      />
    </div>
  );
};

export const EmailFind = () => {
  const modalHook = useModal();

  return (
    <div>
      <JDbutton
        thema="primary"
        onClick={() => {
          modalHook.openModal();
        }}
      >
        변경하기
      </JDbutton>
      <PasswordFinder
        modalHook={modalHook}
        startChangeCallBack={param => {
          console.info(param);
        }}
        completeChangeCallBack={param => {
          console.info(param);
        }}
      />
    </div>
  );
};
