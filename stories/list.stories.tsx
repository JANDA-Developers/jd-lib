// import React from 'react';
// import List, { IProps, JDlist } from '../src/components/list/List';
// import JDcontainer from '../src/components/container/Container';
// import {
//   Title,
//   Primary,
//   Description,
//   Stories,
//   ArgsTable,
// } from '@storybook/addon-docs/blocks';

// const DUMMY_LIST = [
//   'lexicographicSortSchema',
//   'lexicographicSortSchema',
//   'lexicographicSortSchema',
//   'lexicographicSortSchema',
//   'lexicographicSortSchema',
//   'lexicographicSortSchema',
// ];

// const Template = (args: IProps) => <JDlist {...args} />;
// export const PrimaryStory = Template.bind({});

// const args: IProps = {
//   contents: DUMMY_LIST,
// };

// PrimaryStory.args = args;

// export default {
//   title: '기타/List',
//   component: PrimaryStory,
//   decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
//   parameters: {
//     docs: {
//       page: () => (
//         <>
//           <Title>List</Title>
//           <Description>
//             List는 라인간격을 조절하여 내용을 출력할떄 유용합니다. 조금 개편이
//             필요한 컴포넌트 입니다.
//           </Description>
//           <Primary />
//           <Stories />
//           <ArgsTable of={PrimaryStory} />
//         </>
//       ),
//     },
//   },
// };

// export const tandard = () => {
//   return (
//     <JDcontainer verticalPadding>
//       <List
//         mb="largest"
//         lineHeight={1}
//         contents={[
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//         ]}
//       />
//       <List
//         mb="normal"
//         lineHeight={2}
//         contents={[
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//         ]}
//       />
//       <h6>3</h6>
//       <List
//         mb="normal"
//         lineHeight={3}
//         contents={[
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//         ]}
//       />
//       <h6>4</h6>
//       <List
//         mb="normal"
//         lineHeight={4}
//         contents={[
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//         ]}
//       />
//       <h6>stripe</h6>
//       <List
//         stripe
//         lineHeight={2}
//         contents={[
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//           'lexicographicSortSchema',
//         ]}
//       />
//     </JDcontainer>
//   );
// };
export const TEMP = () => <div>문서에 문제가 있어 잠시 닫아둡니다.</div>;
export default {
  title: '임시/List',
};
