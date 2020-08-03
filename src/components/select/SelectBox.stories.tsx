import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SelectBox from './SelectBox';
import JDcontainer from '../container/Container';
import { useSelect } from '../..';
import { IselectedOption } from '../../types/interface';
import { enumToOption } from '../../utils/selectOptionCreater';
import { NotiType } from '../../types/enum';

export default {
  title: 'SelectBox',
  component: () => <SelectBox />,
  decorators: [withKnobs]
};

const options = [
  {
    label: '오전1시',
    value: 1
  },
  {
    label: '오전2시',
    value: 2
  },
  {
    label: '오전3시',
    value: 3
  }
];

const LANG_DUMMY = {
  "NotiType": {
    ELSE: "기타",
    NEW_BOOKING: "새예약",
    PRODUCT_EXPIRE: "만료상품",
    TO_ALL: "모두에게"
  }
}
const DUMMY_LANG_FN = (key1: string, key2: string) => LANG_DUMMY[key1][key2]

export const standard = () => {
  const selectBoxHook = useSelect(options[0], options);
  const NotiOps = enumToOption(DUMMY_LANG_FN, "NotiType", NotiType, true);
  const selectBoxHook2 = useSelect(NotiOps[0], NotiOps);

  return (
    <JDcontainer
      verticalPadding
      style={{
        minHeight: '31.25rem'
      }}
    >
      <div>
        <SelectBox mode="underline" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox mode="underline" size="small" labelPosition="left" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox labelPosition="right" size="small" label="size" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox nativeOptions={false} label="No-Native" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox require label="asdasd" {...selectBoxHook} />
      </div>
      <div>
        <SelectBox require label="asdasd" {...selectBoxHook2} />
      </div>
    </JDcontainer>
  );
};

export const multiSelect = () => {
  const [selecteds, setSelecteds] = useState<IselectedOption[]>(options);

  return (
    <JDcontainer
      style={{
        minHeight: '31.25rem'
      }}
      verticalPadding
    >
      <div>
        <SelectBox
          isMulti
          onChanges={(ops) => {
            setSelecteds(ops);
          }}
          selectedOptions={selecteds}
          options={options}
        />
      </div>
    </JDcontainer>
  );
};

multiSelect.story = {
  name: 'multi'
};
standard.story = {
  name: 'standard'
};
