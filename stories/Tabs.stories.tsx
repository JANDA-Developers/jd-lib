import React from 'react';
import { JDtabs, Tab, TabList, TabPanel } from '../src/components/tabs/Tabs';
import JDcontainer from '../src/components/container/Container';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const Standard = () => {
  return (
    <JDcontainer id="root" verticalPadding>
      <JDtabs>
        <TabList>
          <Tab>사과</Tab>
          <Tab>바나나</Tab>
        </TabList>
        <TabPanel>Apple</TabPanel>
        <TabPanel>Banana</TabPanel>
      </JDtabs>
    </JDcontainer>
  );
};

export default {
  title: '기본/Tabs',
  component: Standard,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>JDtabs</Title>
          <Description>
            코드를 참고하여 Tab을 만드세요 Tab과 TabPanel은 1대1 매칭입니다.
            Tabs는 react-tabs라는 외부 모듈을 사용하여 만들었습니다.
          </Description>
          <Primary />
          <ArgsTable of={JDtabs} />
        </>
      ),
    },
  },
};
