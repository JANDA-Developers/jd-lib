import React from 'react';
import JDcontainer from '../container/Container';
import Timepicker from './Timepicker';
import { useTimePicker } from '../../hooks/hook';

export const standard = () => {

  const timePickerHook = useTimePicker()

  // hook = 저장소 데이터를 저장하는 저장소다 
  // 안족컴포넌트에 있으면 조회를 할 수가 없어요.
  // DATA API요청을 날려야하는 상황이면
  // State 위로 올리는걸 권장함
  return (
    <JDcontainer
      verticalPadding
      style={{
        minHeight: '31.25rem'
      }}
    >
      <div>
        <Timepicker {...timePickerHook}
        
        hourSelecterProps={{
          label: "시간"
        }}
        minSelecterProps={{
          label: "분"
        }}  disabledOps={[10,40,60]} unit={10}  />
      </div>
    </JDcontainer>
  );
};

standard.story = {
	name: 'Default'
};

export default {
    title: 'TimePicker',
    component: () => standard
};


