import React from 'react';
import { JDbadge, IJDbadge } from '../src/components/badge/Badge';
import JDcontainer from '../src/components/container/Container';
import JDalign from '../src/components/align/Align';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IJDbadge) => <JDbadge {...args} />;
export const PrimaryStory = Template.bind({});

const args: IJDbadge = {
  label: '예제',
  thema: 'primary',
};

PrimaryStory.args = args;

export default {
  title: '기본/Badge',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Badges</Title>
          <Description>
            Badges는 특별한 기능없는 UI 컴포넌트 입니다. tooltip을 주어 마우스
            오버 힌트를 줄수 있습니다.
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
  const shared = {
    mb: 'small' as any,
    mr: 'small' as any,
  };
  return (
    <JDcontainer verticalPadding>
      <JDalign mb="normal">
        <JDbadge {...shared} thema="primary">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="point">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="grey1">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="grey2">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="grey3">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="grey4">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="new">
          Badge
        </JDbadge>
      </JDalign>
      <div>
        <JDbadge {...shared} thema="new" size="tiny">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="new" size="large">
          Badge
        </JDbadge>
        <JDbadge {...shared} thema="new" mode="folded" size="large">
          Badge
        </JDbadge>
      </div>
    </JDcontainer>
  );
};
