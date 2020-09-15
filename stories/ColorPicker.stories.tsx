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

export const Standard = (args: IProps) => {
  const colorHook = useColorPicker('#fff');
  return (
    <JDcontainer verticalPadding>
      <JDcolorPicker label="색상선택" colorHook={colorHook} {...args} />
    </JDcontainer>
  );
};

export default {
  title: '기타/ColorPicker',
  component: Standard,
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
          <Primary />
          <ArgsTable of={Standard} />
        </>
      ),
    },
  },
};
