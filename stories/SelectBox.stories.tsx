import React, { useState } from 'react';
import SelectBox from '../src/components/select/SelectBox';
import JDcontainer from '../src/components/container/Container';
import { IselectedOption } from '../src/types/interface';
import { enumToOption, selectOpCreater } from '../src/utils/selectOptionCreater';
import { NotiType } from '../src/types/enum';
import { useSelect } from '../src/hooks/hook';

export default {
  title: 'SelectBox',
  component: () => <SelectBox />,
};

const options = [
  {
    label: 'Strawberry',
    value: 'strawberry'
  },
  {
    label: 'Apple',
    value: 'apple'
  },
  {
    label: 'Graph',
    value: 'graph'
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

const numOp = selectOpCreater({ count: 99, labelAdd: "명", start: 0 });

const DUMMY_LANG_FN = (key1: string, key2: string) => LANG_DUMMY[key1][key2]

export const standard = () => {
  const selectBoxHook = useSelect(options[0], options);
  const NotiOps = enumToOption(DUMMY_LANG_FN, "NotiType", NotiType, true);
  const selectBoxHook2 = useSelect(NotiOps[0], NotiOps);
  const numOpselect = useSelect(numOp[0], numOp);

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
        <SelectBox labelPosition="right" size="small" label="size" {...numOpselect} />
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
      <div>
        <SelectBox menuPlacement="top" require label="asdasd" {...selectBoxHook2} />
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
