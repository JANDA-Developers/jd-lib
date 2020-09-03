import React, { useState } from 'react';
import JDcontainer from '../src/components/container/Container';
import { Configer, IConfigerProp } from '../src/components/configer/Configer';
import {
  Title,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const DummyItems = [
  'photato',
  'apple',
  'banana',
  'honey2',
  'photato2',
  'apple2',
  'banana2',
  'honey3',
];

const Template = (args: Partial<IConfigerProp>) => {
  const [eanbleItems, setEanbleItems] = useState(args.allItem);
  return (
    <Configer
      allItem={[]}
      langs={{
        enableHeader: '적용',
        unableHeader: '미적용',
      }}
      onEnableChange={enableItems => {
        setEanbleItems(enableItems);
      }}
      enableItems={eanbleItems || []}
      {...args}
    />
  );
};
export const PrimaryStory = Template.bind({});

const args: IConfigerProp = {
  allItem: DummyItems,
};

PrimaryStory.args = args;

export default {
  title: 'Configer',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Configer</Title>
          <Description>
            Configer 설정을 저장하고 변경할떄 유용함 사용시 useState로 Data
            핸들링
          </Description>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const [eanbleItems, setEanbleItems] = useState(DummyItems);
  return (
    <Configer
      langs={{
        enableHeader: '적용',
        unableHeader: '미적용',
      }}
      onEnableChange={enableItems => {
        setEanbleItems(enableItems);
      }}
      allItem={DummyItems}
      enableItems={eanbleItems}
    />
  );
};
