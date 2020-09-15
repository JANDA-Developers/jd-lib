import React from 'react';
import { PhotoFrame, Iprops } from '../src/components/photoFrame/PhotoFrame';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';
import { IProps } from './components/pages/Exception';

const Template = (args: Iprops) => <PhotoFrame {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {};

PrimaryStory.args = args;

export default {
  title: '기본/PhotoFrame',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>PhotoFrame</Title>
          <Description>
            PhotoFrame에 lang과 response는 반응형 이미지를 만들도록 도와줍니다.
            반응형 이미지는 src의 끝에 --mb --pc 를 부착하여 이미지를 호출하는
            방법을 사용합니다. lang에따라서 또 --lang 이런 형태로 이미지를
            호출합니다. 물론 반응형 이미지를 만들기 위해서 레포지토리에 미리
            명명법에 맞는 파일명으로 올려두어야합니다.
          </Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const standard = () => {
  const langOptions = {
    kr: 'kr',
    en: 'en',
  };
  return (
    <JDcontainer verticalPadding>
      <PhotoFrame
        responseImg
        type=".png"
        lang={'kr'}
        className="homepageRequest__topPhoto JDbgColor--primary"
        src={`https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/describe/homepage_request`}
      />
    </JDcontainer>
  );
};

standard.story = {
  name: 'standard',
};
