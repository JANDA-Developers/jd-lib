import React from 'react';
import Card, { JDcard, CardProps } from '../src/components/cards/Card';
import JDcontainer from '../src/components/container/Container';
import JDbutton from '../src/components/button/Button';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';
import { JDswitch } from '../src/components/switch/Switch';
import { JDtypho } from '../src/components/typho/Typho';
import { useSwitch } from '../src/hooks/hook';

const Template = (args: CardProps) => <JDcard {...args} />;
export const PrimaryStory = Template.bind({});

const args: CardProps = {
  children: <h1>Some Content Here</h1>,
};

PrimaryStory.args = args;

export default {
  title: '기본/Card',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Card</Title>
          <Description>Card 이펙트</Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const swtichHook = useSwitch(false);
  return (
    <>
      <h6>일반</h6>
      <Card
        mb="large"
        mr="no">Card Content</Card>
      <h6>footer 버튼 임베이드</h6>
      <Card
        mb="large"
        mr="no"
        foot={{
          mode: 'fit',
          element: (
            <div>
              <JDbutton label="111" />
              <JDbutton label="222" />
              <JDbutton label="333" />
            </div>
          ),
        }}
      >
        Card Content
      </Card>
      <h6>Badge 임베이드</h6>
      <Card
        mb="large"
        badges={[
          {
            mode: 'folded',
            label: '111',
            thema: 'primary',
            size: 'large',
          },
          {
            mode: 'folded',
            label: '222',
            thema: 'new',
            size: 'large',
          },
        ]}
      >
        <div>Card Content</div>
      </Card>
      <h6>BookMarks 임베이드</h6>
      <Card
        mb="large"
        bookMarks={[
          {
            children: '부킹',
            decoColor: '#4C5B73',
            activate: true,
          },
          {
            children: '타스',
            decoColor: '#D26436',
          },
          {
            children: '라이트',
            decoColor: '#00C431',
          },
        ]}
      >
        <div>Card Content</div>
      </Card>
      <h6>Flat card</h6>
      <Card
        mb="large"
        mode="border"
        head={{
          title: "예약안내"
        }}
        padding="small"
        foot={{
          element: <JDtypho size="small" flex={{
            between: true
          }}>
            <span>
              자동발신
            </span>
            <JDswitch {...swtichHook} mb="no" color="error" ltxt="OFF" rtxt="ON" />
          </JDtypho>
        }}
      >
        <div>Card Content</div>
      </Card>
    </>
  );
};
