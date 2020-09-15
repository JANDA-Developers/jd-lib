import React from 'react';
import { JDcontainer, IProps } from '../src/components/container/Container';
import {
  Title,
  Description,
  ArgsTable,
  Primary,
  Stories,
} from '@storybook/addon-docs/blocks';
import { WindowSize } from '../src/types/enum';

const Template = (args: IProps) => <JDcontainer {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {
  children: <h1>Some Content Hereeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>,
};

PrimaryStory.args = args;

export const standard = () => {
  return (
    <>
      <h6>사이즈:MD</h6>
      <JDcontainer
        size={WindowSize.md}
        style={{
          backgroundColor: '#ccc',
        }}
      >
        Content
      </JDcontainer>
      <h6>사이즈:SM</h6>
      <JDcontainer
        size={WindowSize.sm}
        style={{
          backgroundColor: '#ccc',
        }}
      >
        Content
      </JDcontainer>
      <h6>사이즈:LG</h6>
      <JDcontainer
        size={WindowSize.lg}
        style={{
          backgroundColor: '#ccc',
        }}
      >
        Content
      </JDcontainer>
    </>
  );
};

export default {
  title: '기본/JDcontianer',
  component: PrimaryStory,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Container</Title>
          <Description>
            WindowSize 사이즈 오브젝트 (Enum) 에서 값을 찾아서 size에
            전달하세요.
          </Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

standard.story = {
  name: 'standard',
};