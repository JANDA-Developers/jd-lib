import React from 'react';
import { JDtoast, IProps } from '../src/components/toast/Toast';
import JDcontainer from '../src/components/container/Container';
import JDbutton from '../src/components/button/Button';
import { toast } from 'react-toastify';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const Standard = (args: IProps) => {
  return (
    <JDcontainer
      style={{
        minHeight: '500px',
      }}
      verticalPadding
    >
      <JDbutton
        onClick={() => {
          toast('토스트');
        }}
        label="토스트"
      />
      <JDbutton
        onClick={() => {
          toast.warn('토스트');
        }}
        thema="error"
        label="토스트"
      />
      <JDbutton
        onClick={() => {
          toast.success('토스트');
        }}
        thema="primary"
        label="토스트"
      />
      <JDtoast {...args} />
    </JDcontainer>
  );
};

export default {
  title: '기본/Toast',
  component: Standard,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Toast</Title>
          <Description>
            {`
            - 먼저 JDtoast를 루트 엘레멘트에 렌더시킵니다. - toast 오브젝트를
            통해서 토스트들을 핸들링 가능합니다.

			toast는 우리 서비스에서 사용자가 Request요청을 flight시키고 응답 받을때 결과에 대해서 알려주는 역할도 하고 있습니다.
			`}
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={Standard} />
        </>
      ),
    },
  },
};
