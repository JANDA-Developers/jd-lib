import React from 'react';
import { Align, IJDalignProp } from '../src/components/align/Align';
import JDlabel from '../src/components/label/JDLabel';
import JDcontainer from '../src/components/container/Container';
import { Block } from '../src/components/align/Block';
import {
  Title,
  Description,
  ArgsTable,
  Stories,
  Primary,
} from '@storybook/addon-docs/blocks';
import '../src/scss/all.scss';

export const Standard = () => {
  return (
    <>
      <JDlabel txt="flex" />
      <Align
        style={{
          minHeight: '100px',
        }}
        flex
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="flex-between" />
      <Align
        flex={{
          between: true,
        }}
      >
        <Block />
        <Block />
        <Block />
        <Block />
      </Align>
      <JDlabel txt="vertical-center" />
      <Align
        flex={{
          vCenter: true,
        }}
      >
        <Block
          style={{
            height: '50px',
          }}
        />
        <Block
          style={{
            height: '70px',
          }}
        />
        <Block />
        <Block
          style={{
            height: '30px',
          }}
        />
      </Align>
      <JDlabel txt="grid and col" />
      <Align grid>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
        <Align col>
          <Block />
        </Align>
      </Align>
      <Align text="center">123</Align>
      <Align text="left">123</Align>
      <Align text="right">123</Align>
      <JDlabel txt="grid and col numbering" />
      <Align grid>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
        <Align
          col={{
            sm: 1,
            lg: 3,
            full: 6,
          }}
        >
          <Block full />
        </Align>
      </Align>
    </>
  );
};

interface IProps {
  cols: number[];
}

export const Grid: React.FC<IProps> = ({ cols = [8, 2, 2] }) => {
  return (
    <>
      <Align grid>
        <Align
          flex={{
            grow: true,
          }}
          col={{
            full: cols[0],
          }}
        >
          <Block />
        </Align>
        <Align
          flex={{
            grow: true,
          }}
          col={{
            full: cols[1],
          }}
        >
          <Block />
        </Align>
        <Align
          flex={{
            grow: true,
          }}
          col={{
            full: cols[2],
          }}
        >
          <Block />
        </Align>
      </Align>
    </>
  );
};

export default {
  title: '기본/Align',
  component: Standard,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Align</Title>
          <Description>
            Align은 자식 컴포넌트들을 정렬하는데 사용합니다. 텍스트정렬,
            `flex`정렬, 그리고 `grid` (`row` 와 `col`) 정렬을 사용 할 수
            있습니다.
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={Align} />
        </>
      ),
    },
  },
};
