import React from "react";
import { IUseDayPicker } from "../../../../hooks/hook";
import { to4YMMDD } from "../../../../utils/setMidNight";
import JDLabel from "../../../label/JDLabel";
import JDbox from "../../../box/JDbox";
import { IDiv } from "../../../../types/interface";

interface Iprops extends IDiv {
  dayPickerHook: IUseDayPicker;
  fromLabel?: string;
  toLabel?: string;
}

const DoubleInputRange: React.FC<Iprops> = ({
  dayPickerHook,
  fromLabel,
  toLabel,
  ...prop
}) => {
  return (
    <div {...prop} className="JDflex--between standard">
      <JDbox>
        <JDLabel txt={fromLabel || ""} />
        <h6 className="JDnoWrap">{to4YMMDD(dayPickerHook.from)}</h6>
      </JDbox>
      <JDbox>
        <JDLabel txt={toLabel || ""} />
        <h6 className="JDnoWrap">{to4YMMDD(dayPickerHook.to)}</h6>
      </JDbox>
    </div>
  );
};

export default DoubleInputRange;
