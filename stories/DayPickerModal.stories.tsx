import React from 'react';
import {
  JDdayPickerModal,
  Iprops,
} from '../src/components/dayPickerModal/DayPickerModal';
import { useDayPicker, useModal } from '../src/hooks/hook';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/button/Button';
import { TDayPickerDot } from '../src/components/dayPicker/DayPicker';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const Standard = () => {
  const DayPickerModalHook = useModal(true);
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
          DayPickerModalHook.openModal();
        }}
        label={'열기'}
      />
      <JDdayPickerModal
        dots={dots}
        {...DayPickerHook}
        callBackMaxRangeOut={() => {
          action('callBackMaxRangeOut');
        }}
        maxRange={90}
        autoClose={true}
        isRange={true}
        modalHook={DayPickerModalHook}
      />
    </div>
  );
};

const Template = (args: Partial<Iprops>) => {
  const DayPickerModalHook = useModal(false);
  const DayPickerHook = useDayPicker(null, null);

  return (
    <JDdayPickerModal
      modalHook={DayPickerModalHook}
      {...DayPickerHook}
      {...args}
    />
  );
};

export const PrimaryStory = Template.bind({});

const args: Partial<Iprops> = {};
PrimaryStory.args = args;

export default {
  title: 'DayPickerModal',
  component: PrimaryStory,
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
          <Stories />
          <ArgsTable of={PrimaryStory} />
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
