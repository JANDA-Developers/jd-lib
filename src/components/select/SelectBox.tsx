// TODO
// 셀렉트박스 Width 값을 오토로 해주기
import React, { Fragment } from 'react';
import Select, { ValueType } from 'react-select';
// @ts-ignore
import classNames from 'classnames';
import { SelectComponentsProps } from 'react-select/src/Select';
import userTacking from '../../utils/userTracking';
import { JDatomExtentionSet, JDinputExtention } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';
import isMobile from 'is-mobile';
import JDLabel from '../label/JDLabel';

export interface IselectedOption<T = any> {
  label: string;
  value: T;
}

export enum SelectBoxSize {
  TWO = '4rem',
  FOUR = '6rem',
  SIX = '9rem',
  FIVE = '11rem',
}

// Value === selectedOption
// defaultValue 는 그 값이 바뀌어도 업데이트 되지않을것임
export interface JDselectProps extends SelectComponentsProps, JDinputExtention {
  /** 라벨값*/
  label?: string | JSX.Element;
  /** 사용금지*/
  disabled?: boolean;
  /** 선택된 옵션*/
  selectedOption?: IselectedOption | null;
  /** 선택된 옵션들*/
  selectedOptions?: ValueType<IselectedOption<any>>;
  /** 전체 옵션들*/
  options?: IselectedOption[];
  /** 선택된 옵션들이 변할떄*/
  onChanges?(selectedOps: IselectedOption[]): void;
  /** 옵션이 변할떄*/
  onChange?(selecteds: IselectedOption): void;
  className?: string;
  props?: any;
  /** 모양변환*/
  mode?: 'underline';
  /** 기본값*/
  defaultValue?: IselectedOption | null;
  /** 열림정의*/
  isOpen?: boolean;
  /** 메뉴가 셀렉트 박스 범위에 국한 받지않음*/
  menuCanOverflow?: boolean;
  /** 메뉴 텍스트 넘침 허용*/
  textOverflow?: 'visible' | 'hidden';
  /** 사이즈*/
  size?: 'small';
  /** 라벨 위치*/
  labelPosition?: 'left' | 'right';
  /** 배경색*/
  background?: 'white';
  /** 보더색*/
  borderColor?: 'primary';
  /** 아래화살표를 보여야할지 */
  displayArrow?: boolean;
  /** 가운데정렬 */
  menuItemCenterlize?: boolean;
  /** 모바일 환경에서는 네이티브 셀렉트를 사용함 */
  nativeOptions?: boolean;
}

export const JDselectTemp: React.FC<JDselectProps & JDatomExtentionSet> = ({
  label,
  disabled,
  selectedOption,
  onChange,
  noOptionsMessage = '--',
  rightLabel,
  options,
  mode,
  className,
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
  autoSize = true,
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

  const classes = classNames('JDselect', className, {
    'JDselect--unDisplayArrow': displayArrow === false,
    'JDselect--underline': mode === 'underline',
    'JDselect--disabled': disabled,
    'JDselect--left': labelPosition === 'left',
    'JDselect--right': labelPosition === 'right',
    'JDselect--small': size === 'small',
    'JDselect--bg': background === 'white',
    'JDselect--border-primary': borderColor === 'primary',
    'JDselect--textOverflowVisible': textOverflow === 'visible',
    'JDselect--menuCanOverflow': menuCanOverflow,
    'JDselect--autoSize': autoSize,
    'JDselect--native': isMobile() && nativeOptions,
    'JDselect--menuItem-centerlize': menuItemCenterlize,
    ...JDatomClasses(props),
  });

  const selectStyle: any = {
    width: '',
  };

  const deafultPlaceHolder = 'select';

  if (nativeOptions && isMobile())
    return (
      <Fragment>
        {label ? (
          <JDLabel
            require={require}
            txt={label}
            className="JDselect__label JDselect__label--top"
          />
        ) : null}
        <select
          onChange={e => {
            const value = e.currentTarget.value;
            handleChange(
              options?.find(op => op.value == value) || { label: '', value: '' }
            );
          }}
          className={classes}
        >
          {options?.map((op, i) => (
            <option
              value={op.value}
              selected={op.value == selectedOption?.value}
              key={op.value + 'option' + i}
            >
              {op.label}
            </option>
          ))}
        </select>
      </Fragment>
    );

  return (
    <div style={selectStyle} className={classes}>
      {label ? (
        <JDLabel
          require={require}
          txt={label}
          className="JDselect__label JDselect__label--top"
        />
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
  label: '',
  onChange: () => { },
  selectedOption: undefined,
  props: {},
};

const JDselect = React.memo(JDselectTemp);

export default JDselect;
