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

const Template = (args: CardProps) => <JDcard {...args} />;
export const PrimaryStory = Template.bind({});

const args: CardProps = {
  children: <h1>Some Content Here</h1>,
};

PrimaryStory.args = args;

export default {
  title: 'Card',
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
  return (
    <>
      <h6>일반</h6>
      <Card mr="no">Card Content</Card>
      <h6>footer 버튼 임베이드</h6>
      <Card
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
    </>
  );
};
