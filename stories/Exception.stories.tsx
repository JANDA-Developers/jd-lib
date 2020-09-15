import React, { useState } from 'react';
import { JDcontainer } from '../src';
import { Exception, IProps } from '../src/components/pages/Exception';
import {
  Title,
  Description,
  ArgsTable,
  Stories,
  Primary,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProps) => <Exception {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {
  type: '404',
};

PrimaryStory.args = args;

export default {
  title: '페이지/Exception',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Exception</Title>
          <Description>
            예외 페이지 처리 type에 값을주면 디폴트 셋팅이 적용됩니다.
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const standard = () => {
  return (
    <JDcontainer verticalPadding>
      <Exception type={'404'} button={{ thema: 'black' }} />
      <Exception type="deny" button={{ thema: 'black' }} />
      <Exception type="expire" button={{ thema: 'black' }} />
      <Exception
        title={'Custom Page'}
        text="커스텀페이지"
        img={''}
        button={{ thema: 'black' }}
      />
    </JDcontainer>
  );
};
