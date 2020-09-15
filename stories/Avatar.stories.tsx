import React from 'react';
import { Avatar, Iprops } from '../src/components/avatar/Avatar';
import { useFilesManager } from '../src/hooks/hook';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  Props,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: Iprops) => <Avatar {...args} />;
export const PrimaryStory = Template.bind({});

const args: Iprops = {
  img: 'https://front-ui-doc.s3.ap-northeast-2.amazonaws.com/tanos.jpg',
  size: 'huge',
};

PrimaryStory.args = args;

export default {
  title: '기본/Avatar',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Avatar</Title>
          <Description>
            img 속성에 URL을 주십시요 이미지 업로드 UI 가지 구현되어 있습니다.
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
  const uploader = useFilesManager();

  return (
    <>
      <Avatar size="small" />
      <Avatar />
      <Avatar size="large" />
      <Avatar size="huge" />
      <Avatar size="huge" uploader={uploader} mode="edit" />
    </>
  );
};
