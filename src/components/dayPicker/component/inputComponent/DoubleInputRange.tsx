import React from "react";
import { IUseDayPicker } from "../../../../hooks/hook";
import { to4YMMDD } from "../../../../utils/setMidNight";
import { IDiv } from "../../../../types/interface";
import { JDalign, JDsplinter } from '../../../..';
import JDbox from '../../../box/JDbox';


interface Iprops extends IDiv {
  dayPickerHook: IUseDayPicker;
  fromLabel?: string;
  toLabel?: string;
}

const DoubleInputRange: React.FC<Iprops> = ({
  dayPickerHook,
  ...prop
}) => {
  return (
    <JDalign flex={{
      vCenter: true
    }} {...prop} className="JDdoubleInputRange">
      <JDbox mr="no" mb="no" hover children={to4YMMDD(dayPickerHook.from)} />
      <JDsplinter>~</JDsplinter>
      <JDbox mr="no" mb="no" hover children={to4YMMDD(dayPickerHook.to)} />
    </JDalign>
  );
};

export default DoubleInputRange;
