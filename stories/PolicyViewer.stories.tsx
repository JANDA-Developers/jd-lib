import React from 'react';
import JDcontainer from '../src/components/container/Container';
import JDpolicyViewer from '../src/components/policy/PolicyViewer';
import JDprivacyPolicy from '../src/components/policy/PrivacyPolicy';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: { children: any }) => <JDpolicyViewer {...args} />;
export const PrimaryStory = Template.bind({});

export default {
  title: '기타/PolicyViewer',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>PolicyViewer</Title>
          <Description>긴 텍스트를 올바른 형태로 출력합니다.</Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  return <JDpolicyViewer>{JDprivacyPolicy}</JDpolicyViewer>;
};
