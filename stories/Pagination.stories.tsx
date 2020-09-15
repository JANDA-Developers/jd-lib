import React from 'react';
import { JDPagination, IProps } from '../src/components/pagination/Pagination';
import JDcontainer from '../src/components/container/Container';
import { usePagination } from '../src/hooks/hook';
import { DEFAULT_PAGINATION_SETTING } from '../src/types/defaults';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

const Standard = (args: Partial<IProps>) => {
  const paginationHook = usePagination(1);
  //여기서 뽑은 페이지 데이터를 토대로 Query에 요청하면 됨
  return (
    <JDcontainer verticalPadding>
      <JDPagination
        pageCount={20}
        previousLabel="이전"
        nextLabel="이후"
        {...paginationHook}
        {...DEFAULT_PAGINATION_SETTING}
        {...args}
      >
        Pagination Content
      </JDPagination>
    </JDcontainer>
  );
};

export const PrimaryStory = Standard.bind({});

export default {
  title: '기본/JDpagination',
  component: PrimaryStory,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Pagination</Title>
          <Description>
            내부적으로 react-paginate 라는 외부모듈을 사용합니다.
          </Description>
          <Primary />
          <Stories />
          <Description>
            더 많은 설정 가능한 react-pagination 의 프로퍼티들을 확장
            가능합니다.
          </Description>
          <ArgsTable of={PrimaryStory} />
        </>
      ),
    },
  },
};
