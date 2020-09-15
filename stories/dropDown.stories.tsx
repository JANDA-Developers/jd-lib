import React from 'react';
import JDcontainer from '../src/components/container/Container';
import JDbutton from '../src/components/button/Button';
import DropDown, {
  DropDown as JDdropDown,
  IProp,
} from '../src/components/dropDown/DropDown';
import { useDropDown } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Source,
} from '@storybook/addon-docs/blocks';

const Template = (args: Partial<IProp>) => {
  const dropDown = useDropDown();

  return (
    <>
      <JDbutton thema="primary" label="basic" onClick={dropDown.open} />
      <JDdropDown
        Buttons={(info: FOO) => {
          return [
            <JDbutton key={'Asd'} label="123" />,
            <JDbutton key={'ccdd'} label="123" />,
          ];
        }}
        mode="mixed"
        {...dropDown}
        {...args}
      />
    </>
  );
};

export const PrimaryStory = Template.bind({});

const args: Partial<IProp> = {
  Buttons: (info: FOO) => {
    return [
      <JDbutton key={'Asd'} label="123" />,
      <JDbutton key={'ccdd'} label="123" />,
    ];
  },
};

PrimaryStory.args = args;

export default {
  title: '응용/DropDown',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>DropDown</Title>
          <Description>
            DropDown은 모바일 환경에서는 아래 fiexed 부착 그렇지 않을떄는 버튼
            바로위에 렌더링 됩니다. mode를 통해서 해당 행동을 조정 할수있습니다.
            modal과 마찬가지로 Info객체를 전달하여 오픈시에 어떤 화면이 나올지
            컨트롤 할 수 있습니다.
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
          <Source
            code='
          
          () => {
            const dropDownHook = useDropDown<FOO>();
            const dropDownHook2 = useDropDown<FOO>();
            const dropDownHook3 = useDropDown<FOO>();
          
            return (
              <JDcontainer verticalPadding>
                <JDbutton thema="primary" label="basic" onClick={dropDownHook.open} />
                <JDdropDown
                  closeOnWindowClick
                  {...dropDownHook}
                  Buttons={(info: FOO) => {
                    console.info(info);
                    return [
                      <JDbutton key={"Asd"} label="123" />,
                      <JDbutton key={"ccdd"} label="123" />,
                    ];
                  }}
                />
                <JDbutton thema="primary" label="Bottom" onClick={dropDownHook2.open} />
                <JDdropDown
                  closeOnWindowClick
                  {...dropDownHook2}
                  Buttons={(info: FOO) => {
                    console.info(info);
                    return [
                      <JDbutton key={"Asd"} label="123" />,
                      <JDbutton key={"ccdd"} label="123" />,
                    ];
                  }}
                />
                <JDbutton thema="primary" label="widthHead" onClick={dropDownHook3.open} />
                <JDdropDown
                  head={{
                    title: "타이틀",
                  }}
                  closeOnWindowClick
                  {...dropDownHook3}
                  Buttons={(info: FOO) => {
                    console.info(info);
                    return [
                      <JDbutton key={"Asd"} label="123" />,
                      <JDbutton key={"ccdd"} label="123" />,
                    ];
                  }}
                />
              </JDcontainer>
            );
          };
          '
          />
        </>
      ),
    },
  },
};

type FOO = {};

export const Standard = () => {
  const dropDownHook = useDropDown<FOO>();
  const dropDownHook2 = useDropDown<FOO>();
  const dropDownHook3 = useDropDown<FOO>();

  return (
    <JDcontainer verticalPadding>
      <JDbutton thema="primary" label="basic" onClick={dropDownHook.open} />
      <JDdropDown
        closeOnWindowClick
        {...dropDownHook}
        Buttons={(info: FOO) => {
          console.info(info);
          return [
            <JDbutton key={'Asd'} label="123" />,
            <JDbutton key={'ccdd'} label="123" />,
          ];
        }}
      />
      <JDbutton thema="primary" label="Bottom" onClick={dropDownHook2.open} />
      <JDdropDown
        closeOnWindowClick
        {...dropDownHook2}
        Buttons={(info: FOO) => {
          console.info(info);
          return [
            <JDbutton key={'Asd'} label="123" />,
            <JDbutton key={'ccdd'} label="123" />,
          ];
        }}
      />
      <JDbutton
        thema="primary"
        label="widthHead"
        onClick={dropDownHook3.open}
      />
      <JDdropDown
        head={{
          title: '타이틀',
        }}
        closeOnWindowClick
        {...dropDownHook3}
        Buttons={(info: FOO) => {
          console.info(info);
          return [
            <JDbutton key={'Asd'} label="123" />,
            <JDbutton key={'ccdd'} label="123" />,
          ];
        }}
      />
    </JDcontainer>
  );
};
