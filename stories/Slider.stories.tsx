import React from 'react';
import Slider, {
  JDSlider,
  Slide as JDslide,
  TJDsliderProp,
} from '../src/components/slider/Slider';
import Align from '../src/components/align/Align';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const Standard = () => {
  const commonProp = {
    flex: {
      center: true,
      vCenter: true,
    },
    style: {
      background: '#eee',
      height: '100px',
    },
  };
  return (
    <JDcontainer verticalPadding>
      <JDSlider>
        <JDslide>
          <Align {...commonProp}>1</Align>
        </JDslide>
        <JDslide>2</JDslide>
        <JDslide>
          <Align {...commonProp}>3</Align>
        </JDslide>
        <JDslide>
          <Align {...commonProp}>4</Align>
        </JDslide>
        <JDslide>
          <Align {...commonProp}>5</Align>
        </JDslide>
      </JDSlider>
    </JDcontainer>
  );
};

export default {
  title: '기본/Slider',
  component: Standard,
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
          <ArgsTable of={JDSlider} />
        </>
      ),
    },
  },
};
