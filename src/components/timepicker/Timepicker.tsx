// TODO
// 셀렉트박스 Width 값을 오토로 해주기
import React from "react";
import JDselect, { JDselectProps } from "../select/SelectBox";
import {IUseTimePicker} from "../../hooks/hook"
import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from "../../types/const";
import { JDalign } from "../..";
import { IselectedOption } from "../../types/interface";

interface IProps extends IUseTimePicker {
  hourSelecterProps?: JDselectProps;
  minSelecterProps?: JDselectProps
  disabledOps?: number[];
  hourOps?:IselectedOption<number>[];
  minOps?:IselectedOption<number>[]; 
  unit?: 5 | 10 | 15 | 30
}

const TimePicker: React.FC<IProps> = ({
  hour,
  min,
  setTime,
  disabledOps,
  hourOps = HOURS_SELECT_OP,
  minOps = MINUTES_SELECT_OP,
  unit = 1,
  hourSelecterProps,
  minSelecterProps
}) => {

  const filtedMinOps = minOps.filter(op => op.value % unit === 0);
  const selectedOpHour = HOURS_SELECT_OP.find(op => op.value === hour)
  const selectedOpMin = filtedMinOps.find(op => op.value === min)

  return (
    <JDalign flex={{
      between: true,
      grow: true
    }} className="timepicker">
      <JDselect {...hourSelecterProps} className="timepicker__input" 
        onChange={(selected) => {
          setTime({
            hour: selected.value,
            min: min
          })
        }} 
        selectedOption={selectedOpHour} options={hourOps} 
      />
      <JDselect {...minSelecterProps} className="timepicker__input" 
        onChange={(selected) => {
          setTime({
            hour: hour,
            min: selected.value,
          })
        }} 
        isOptionDisabled={(option?:any)=> {
          if(disabledOps?.includes(option.value)){
            return true;
          }else{
            return false;
          }
        }} 
        selectedOption={selectedOpMin} options={filtedMinOps} 
      />
    </JDalign>
  );
};

export default TimePicker;
