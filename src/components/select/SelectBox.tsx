// TODO
// 셀렉트박스 Width 값을 오토로 해주기
import React, { Fragment } from "react";
import Select, { ValueType } from "react-select";
// @ts-ignore
import classNames from "classnames";
import { SelectComponentsProps } from "react-select/src/Select";
import userTacking from "../../utils/userTracking";
import { JDatomExtentionSet, JDinputExtention } from "../../types/interface";
import { JDatomClasses } from "../../utils/autoClasses";
import isMobile from "is-mobile";
import JDLabel from '../label/JDLabel';

export interface IselectedOption<T = any> {
  label: string;
  value: T;
}

export enum SelectBoxSize {
  TWO = "4rem",
  FOUR = "6rem",
  SIX = "9rem",
  FIVE = "11rem"
}

// Value === selectedOption
// defaultValue 는 그 값이 바뀌어도 업데이트 되지않을것임
export interface JDselectProps extends SelectComponentsProps, JDinputExtention {
  label?: string | JSX.Element;
  disabled?: boolean;
  selectedOption?: IselectedOption | null;
  selectedOptions?: ValueType<IselectedOption<any>>;
  options?: IselectedOption[];
  onChanges?(selectedOps: IselectedOption[]): void;
  onChange?(selecteds: IselectedOption): void;
  className?: string;
  props?: any;
  mode?: "underline"
  defaultValue?: IselectedOption | null;
  isOpen?: boolean;
  menuCanOverflow?: boolean;
  textOverflow?: "visible" | "hidden";
  size?: "small";
  width?: "";
  labelPosition?: "left" | "right";
  background?: "white";
  borderColor?: "primary";
  displayArrow?: boolean;
  menuItemCenterlize?: boolean;
  nativeOptions?: boolean;
}

const JDselectTemp: React.FC<JDselectProps & JDatomExtentionSet> = ({
  label,
  disabled,
  selectedOption,
  onChange,
  noOptionsMessage = "--",
  rightLabel,
  options,
  mode,
  className,
  width,
  size,
  isOpen,
  defaultValue,
  labelPosition,
  placeholder,
  textOverflow,
  background,
  menuItemCenterlize,
  menuCanOverflow,
  displayArrow,
  borderColor,
  selectedOptions,
  autoSize,
  require,
  nativeOptions = selectedOptions ? false : true,
  onChanges,
  // eslint-disable-next-line no-unused-vars
  ...props
}) => {
  // 👿 이거 ㅇefaultValue랑 selectedOption이랑 많이 햇갈림ㅠㅠ
  // placeHolder 가 보일려면 value 는 undefined 여야 합니다.
  let validSelectedOption;
  if (selectedOption && selectedOption.value === undefined)
    validSelectedOption = undefined;
  else validSelectedOption = selectedOption;

  const handleChange = (selectOption: any) => {
    userTacking(label?.toString(), selectOption?.value);
    onChange && onChange(selectOption);
    onChanges && onChanges(selectOption);
  };

  const classes = classNames("JDselect", className, {
    "JDselect--unDisplayArrow": displayArrow === false,
    "JDselect--underline": mode === "underline",
    "JDselect--disabled": disabled,
    "JDselect--left": labelPosition === "left",
    "JDselect--right": labelPosition === "right",
    "JDselect--small": size === "small",
    "JDselect--bg": background === "white",
    "JDselect--border-primary": borderColor === "primary",
    "JDselect--textOverflowVisible": textOverflow === "visible",
    "JDselect--menuCanOverflow": menuCanOverflow,
    "JDselect--autoSize": autoSize,
    "JDselect--native": isMobile() && nativeOptions,
    "JDselect--menuItem-centerlize": menuItemCenterlize,
    ...JDatomClasses(props),
  });

  const selectStyle: any = {
    width: ""
  };

  const deafultPlaceHolder = "select";


  if (nativeOptions && isMobile())
    return (
      <Fragment>
        {label ? (
          <JDLabel require={require} txt={label} className="JDselect__label JDselect__label--top" />
        ) : null}
        <select onChange={(e) => {
          const value = e.currentTarget.value
          handleChange(
            options?.find(op => op.value == value) || { label: "", value: "" }
          )
        }} className={classes} >
          {options?.map((op, i) =>
            <option value={op.value} selected={op.value == selectedOption?.value} key={op.value + "option" + i} >{op.label}</option>
          )}
        </select >
      </Fragment>
    )

  return (
    <div style={selectStyle} className={classes}>
      {label ? (
        <JDLabel require={require} txt={label} className="JDselect__label JDselect__label--top" />
      ) : null}
      <Select
        {...props}
        options={options}
        value={selectedOptions || validSelectedOption}
        defaultValue={defaultValue}
        onChange={handleChange}
        className="react-select-container"
        classNamePrefix="react-select"
        isDisabled={disabled}
        noOptionsMessage={() => noOptionsMessage}
        placeholder={placeholder || deafultPlaceHolder}
      />
    </div>
  );
};

JDselectTemp.defaultProps = {
  disabled: false,
  label: "",
  onChange: () => { },
  selectedOption: undefined,
  props: {}
};

const JDselect = React.memo(JDselectTemp);

export default JDselect;
