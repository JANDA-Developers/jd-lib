import React from 'react';
import JDcontainer from '../src/components/container/Container';
import {
  PriceViewer,
  ICalculaterProp,
} from '../src/components/priceViewer/PriceViewer';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Source,
} from '@storybook/addon-docs/blocks';

const DummyData = [
  {
    price: 3000,
    describe: '1000 X 3(명)',
    title: '상품1',
  },
  {
    price: 25000,
    describe: '5000 X 5(명)',
    title: '상품2',
  },
  {
    price: 16000,
    describe: '4000 X 4(명)',
    title: '상품3',
    sub: [
      {
        price: 3000,
        describe: '1000 X 3(명)',
        title: '상품1',
      },
      {
        price: 25000,
        describe: '5000 X 5(명)',
        title: '상품2',
      },
    ],
  },
];

const Template = (args: ICalculaterProp) => <PriceViewer {...args} />;
export const PrimaryStory = Template.bind({});

const args: ICalculaterProp = {
  priceLine: DummyData,
};

PrimaryStory.args = args;

export default {
  title: '응용/PriceViewer',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>PriceViewer</Title>
          <Description>
            PriceViewer는 가격 계산을 조회할때 데이터를 일정한 UI로 표현해주는
            역할을 합니다. 서브 Price 와 메인 Price가 있으면 Dummy Data를
            참조하여 어떻게 화면이 그려졌는지 확인 해보세요.
          </Description>
          <Source
            language="tsx"
            code="
const DummyData = [
    {
        price: 3000,
        describe: '1000 X 3(명)',
        title: '상품1',
    },
    {
        price: 25000,
        describe: '5000 X 5(명)',
        title: '상품2',
    },
    {
        price: 16000,
        describe: '4000 X 4(명)',
        title: '상품3',
        sub: [
        {
            price: 3000,
            describe: '1000 X 3(명)',
            title: '상품1',
        },
        {
            price: 25000,
            describe: '5000 X 5(명)',
            title: '상품2',
        },
        ],
    },
    ];
            
          "
          />
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
    <JDcontainer verticalPadding>
      <PriceViewer priceLine={DummyData} />
    </JDcontainer>
  );
};

export const CustomResult = () => {
  return (
    <JDcontainer verticalPadding>
      <PriceViewer
        lastLine={{
          price: 10000,
          title: '결과',
          describe: '결과',
        }}
        shouldShowResult={false}
        priceLine={DummyData}
      />
    </JDcontainer>
  );
};
