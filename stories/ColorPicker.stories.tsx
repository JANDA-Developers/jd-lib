import React from 'react';
import JDcontainer from '../src/components/container/Container';
import {
  JDcolorPicker,
  IProps,
} from '../src/components/colorPicker/JDcolorPicker';
import { useColorPicker } from '../src/hooks/hook';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: IProps) => <JDcolorPicker {...args} />;
export const PrimaryStory = Template.bind({});

const args: IProps = {};

PrimaryStory.args = args;

export default {
  title: 'ColorPicker',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>ColorPicker</Title>
          <Description>
            컬러 추출용 react-color 라는 외부모듈을 사용함
          </Description>
          <a href={'https://www.npmjs.com/package/react-color'}>react-color</a>
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const colorHook = useColorPicker('#fff');
  return (
    <JDcontainer verticalPadding>
      <JDcolorPicker colorHook={colorHook} />
    </JDcontainer>
  );
};
