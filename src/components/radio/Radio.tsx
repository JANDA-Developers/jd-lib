import React from "react";
import { IUseRadio } from "../../hooks/hook";
import JDLabel from "../label/JDLabel";
import JDalign from "../align/Align";
import JDtypho from "../typho/Typho";

export interface IProp extends IUseRadio { }

export const Radio: React.FC<IProp> = ({ btns, onChange, selectedValue }) => {
  return (
    <JDalign
      className="JDradios"
      flex={{
        vCenter: true,
      }}
    >
      {btns.map((b) => {
        const isSelected = b.value === selectedValue;
        return (
          <JDalign
            mr="normal"
            flex={{
              vCenter: true,
            }}
            className={`JDradios__radio ${
              isSelected && "JDradios__radio--selected"
              }`}
          >
            <JDtypho
              mr="small"
              key={b.key}
              onClick={() => {
                onChange(b.value);
              }}
              className={`JDradios__circle`}
            />
            <JDLabel mb="no" txt={b.label} />
          </JDalign>
        );
      })}
    </JDalign>
  );
};

export default Radio;
