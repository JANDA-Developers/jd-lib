import React from 'react';
import { JDicon, ICONPROP } from '../src/components/icons/Icons';
import { IConOrigin } from '../src/components/icons/declation';
import Align from '../src/components/align/Align';
import JDcontainer from '../src/components/container/Container';
import JDtypho from '../src/components/typho/Typho';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: ICONPROP) => <JDicon {...args} />;
export const PrimaryStory = Template.bind({});

const args: ICONPROP = {
  icon: 'jdG',
};

PrimaryStory.args = args;

export default {
  title: '기본/Icon',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Icon</Title>
          <Description>
            Icon 컴포넌트에 원하는 icon을 넣어 처리 할 수 있습니다. fontSize 와
            color는 기본적으로 inherit 하려 합니다.
          </Description>
          <Title>Icon셋트 추가하기</Title>
          <a>아이콘 추가 방법</a>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const keys = Object.keys(IConOrigin);

  const Wrapper: React.FC = ({ children }) => (
    <Align
      style={{
        textAlign: 'center',
        padding: '.4rem',
        margin: '.2rem',
        borderRadius: '5px',
        background: '#fff',
      }}
    >
      {children}
    </Align>
  );

  return (
    <JDcontainer verticalPadding>
      <Align
        flex={{
          wrap: true,
        }}
      >
        {keys.map(key => (
          <Wrapper key={key}>
            <div>
              <JDtypho
                style={{
                  fontSize: '4px',
                }}
                mb="small"
              >
                {key}
              </JDtypho>
            </div>
            <JDicon icon={key as any} />
          </Wrapper>
        ))}
      </Align>
    </JDcontainer>
  );
};
