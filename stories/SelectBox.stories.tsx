import React, { useState } from 'react';
import JDselectBox, { JDselectProps } from '../src/components/select/SelectBox';
import JDcontainer from '../src/components/container/Container';
import { IselectedOption } from '../src/types/interface';
import {
  enumToOption,
  selectOpCreater,
} from '../src/utils/selectOptionCreater';
import { NotiType } from '../src/types/enum';
import { useSelect } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Source,
} from '@storybook/addon-docs/blocks';

const options = [
  {
    label: 'Strawberry',
    value: 'strawberry',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Graph',
    value: 'graph',
  },
];

const Template = (args: JDselectProps) => {
  const selectBoxHook = useSelect(options[0], options);
  return <JDselectBox {...selectBoxHook} {...args} />;
};
export const PrimaryStory = Template.bind({});

const args: JDselectProps = {};

PrimaryStory.args = args;

export default {
  title: '기본/인풋/SelectBox',
  component: PrimaryStory,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>SelectBox</Title>
          <Description>
            SelectBox는 가장 많이 사용되는 컴포넌트중 하나로 react-select라는
            외부 모듈을 감싼 컴포넌트 입니다. useSelect를 사용해서 데이터를
            핸들링 하세요.
          </Description>
          <Description>*autoWidth 옵션</Description>
          <Primary />
          <Stories />
          <ArgsTable of={PrimaryStory} />
          <Source
            code="
          
const options = [
  {
    label: 'Strawberry',
    value: 'strawberry',
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Graph',
    value: 'graph',
  },
];

const Template = (args: JDselectProps) => {
  const selectBoxHook = useSelect(options[0], options);
  return <JDselectBox {...selectBoxHook} {...args} />;
};
          "
          />
        </>
      ),
    },
  },
};

const LANG_DUMMY = {
  NotiType: {
    ELSE: '기타',
    NEW_BOOKING: '새예약',
    PRODUCT_EXPIRE: '만료상품',
    TO_ALL: '모두에게',
  },
};

const numOp = selectOpCreater({ count: 99, labelAdd: '명', start: 0 });

const DUMMY_LANG_FN = (key1: string, key2: string) => LANG_DUMMY[key1][key2];

export const Standard = () => {
  const selectBoxHook = useSelect(options[0], options);
  const NotiOps = enumToOption(DUMMY_LANG_FN, 'NotiType', NotiType, true);
  const selectBoxHook2 = useSelect(NotiOps[0], NotiOps);
  const numOpselect = useSelect(numOp[0], numOp);

  return (
    <JDcontainer verticalPadding>
      <div>
        <JDselectBox mode="underline" label="size" {...selectBoxHook} />
      </div>
      <div>
        <JDselectBox
          mode="underline"
          size="small"
          labelPosition="left"
          label="size"
          {...selectBoxHook}
        />
      </div>
      <div>
        <JDselectBox
          labelPosition="right"
          size="small"
          label="size"
          {...selectBoxHook}
        />
      </div>
      <div>
        <JDselectBox
          labelPosition="right"
          size="small"
          label="size"
          {...numOpselect}
        />
      </div>
      <div>
        <JDselectBox
          nativeOptions={false}
          label="No-Native"
          {...selectBoxHook}
        />
      </div>
      <div>
        <JDselectBox require label="asdasd" {...selectBoxHook} />
      </div>
      <div>
        <JDselectBox require label="asdasd" {...selectBoxHook2} />
      </div>
      <div>
        <JDselectBox
          menuPlacement="top"
          require
          label="asdasd"
          {...selectBoxHook2}
        />
      </div>
    </JDcontainer>
  );
};

export const MultiSelect = () => {
  const [selecteds, setSelecteds] = useState<IselectedOption[]>(options);

  return (
    <JDcontainer verticalPadding>
      <div>
        <JDselectBox
          isMulti
          onChanges={ops => {
            setSelecteds(ops);
          }}
          selectedOptions={selecteds}
          options={options}
        />
      </div>
    </JDcontainer>
  );
};
