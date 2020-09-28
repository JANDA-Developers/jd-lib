import React from 'react';
import {
  JDdayPickerModal,
  Iprops,
} from '../src/components/dayPickerModal/DayPickerModal';
import { useDayPicker, useModal } from '../src/hooks/hook';
import Button from '../src/components/button/Button';
import { TDayPickerDot } from '../src/components/dayPicker/DayPicker';
import {
  Title,
  Description,
  Stories,
  ArgsTable, Primary, Source
} from '@storybook/addon-docs/blocks';

export const Standard = (args: Partial<Iprops>) => {
  const modalHook = useModal(false);
  const DayPickerHook = useDayPicker(null, null);
  const dots: TDayPickerDot[] = [
    {
      tooltip: '?',
      color: 'error',
      date: new Date(),
    },
  ];

  return (
    <div>
      <Button
        onClick={() => {
          modalHook.openModal();
        }}
        label={'열기'}
      />
      <JDdayPickerModal
        dots={dots}
        {...DayPickerHook}
        {...args}
        autoClose
        isRange
        modalHook={modalHook}
      />
    </div>
  );
};

export default {
  title: '응용/DayPickerModal',
  component: Standard,
  decorators: [(Story: any) => <div>{Story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>DayPickerModal</Title>
          <Description>
            DayPickerModal는 dayPickerHook과 modalHook 두개의 Data State를 제공
            해주어야 동작합니다. 자세항 내요은 Hook part에
          </Description>
          <Primary />
          <Source dark code={`
  const modalHook = useModal(false);
  const DayPickerHook = useDayPicker(null, null);
  const dots: TDayPickerDot[] = [
    {
      tooltip: '?',
      color: 'error',
      date: new Date(),
    },
  ];
  return (
    <div>
      <Button
        onClick={() => {
          modalHook.openModal();
        }}
        label={'열기'}
      />
      <JDdayPickerModal
        dots={dots}
        {...DayPickerHook}
        {...args}
        autoClose
        isRange
        modalHook={modalHook}
      />
    </div>
  );
          `} />
          <Stories />
          <ArgsTable of={Standard} />
        </>
      ),
    },
  },
};

// export default {
//   title: "DayPickerModal",
//   component: () => {
//     const DayPickerModalHook = useModal(true);
//     const DayPickerHook = useDayPicker(null, null);

//     return <DayPickerModal modalHook={DayPickerModalHook} {...DayPickerHook} />;
//   },
// };
