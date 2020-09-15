import React from 'react';
import JDcontainer from '../src/components/container/Container';
import Timepicker, { IProps } from '../src/components/timepicker/Timepicker';
import {
  TimePickerRanger as TimePickerRangerTemp,
  IProps as RangerProps,
} from '../src/components/timepicker/TimePickerRanger';
import { useTimePicker } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

export const TimePikcerRanger = (prop: Partial<RangerProps>) => {
  const timePickerHookFrom = useTimePicker({
    hour: 0,
    min: 0,
  });
  const timePickerHookTo = useTimePicker({
    hour: 24,
    min: 0,
  });

  return (
    <div>
      <TimePickerRangerTemp
        timePickerToHook={timePickerHookTo}
        timePickerFromHook={timePickerHookFrom}
        {...prop}
      />
    </div>
  );
};

export const Standard = (args: IProps) => {
  const timePickerHook = useTimePicker({ hour: 0, min: 0 });

  return (
    <JDcontainer
      verticalPadding
      style={{
        minHeight: '31.25rem',
      }}
    >
      <div>
        <Timepicker
          {...timePickerHook}
          hourSelecterProps={{
            label: '시간',
          }}
          minSelecterProps={{
            label: '분',
          }}
          removeDisabled
          disabledHours={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          disabledMins={[]}
          unit={30}
          {...args}
        />
      </div>
    </JDcontainer>
  );
};

export default {
  title: '기타/TimePikcer',
  component: Standard,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>TimePikcer</Title>
          <Description>
            useTimePicker를 통해서 시간 선택, 분선택 가능
          </Description>
          <Primary />
          <ArgsTable of={Standard} />
        </>
      ),
    },
  },
};
