import React, { Fragment, useMemo } from 'react';
import classNames from 'classnames';
import { IConProps } from '../icons/Icons';
import Preloader from '../preloader/Preloader';
import {
  JDatomClasses,
  bgColorClass,
  borderClass,
  textColorClass,
} from '../../utils/autoClasses';
import s4 from '../../utils/keyGen';
import Tooltip from '../tooltip/Tooltip';
import { JDColor, TMarginSize } from '../../types/enum';
import { JDatomExtentionSet, TElements } from '../../types/interface';
import userTacking from '../../utils/userTracking';
import JDIcon from '../icons/Icons';
import { IconConifgProps } from '../icons/declation';
import JDtypho from '../typho/Typho';

const handleKeyPress = () => { };

type Tshape = 'flat' | 'normal' | 'border' | 'iconButton';

interface IButtonConstum {
  /** 사용 불가능함*/
  disabled?: boolean;
  /** 버튼 텍스트 */
  label?: string | TElements;
  /**  아이콘 PROP 들 */
  iconProp?: IConProps & IconConifgProps;
  /** 해당 PROP에 값을 넣으면 버튼에 툴팁을 생성합니다. */
  dataTip?: any;
  /** 툴팁 PROP 참고 */
  dataFor?: any;
  /** 버튼 패딩 */
  padding?: TMarginSize;
  /** 버튼의 모양을 조절 */
  mode?: Tshape | Tshape[];
  /** 버튼의 크기를 조절 */
  size?: 'tiny' | 'small' | 'large' | 'long' | 'longLarge';
  /** 해당 버튼은 float 속성을 지닙니다. */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /** 버튼 색상 */
  thema?: JDColor | null;
  /** 해당 버튼은 펄스 효과를 가집니다. */
  pulse?: boolean;
  /** 해당 버튼은 깜빡임 효과를 가집니다. */
  blink?: boolean;
  /** 해당 버튼은 로딩 효과를 가집니다. */
  loading?: boolean;
  /** 해당 버튼의 라운드를 조절합니다. */
  br?: 'round' | 'square' | 'no';
  /** 해당 PROP 를 전달하여 툴팁을 생성합니다. */
  tooltip?: string;
  /** 해당 버튼의 동작을 A링크처럼 처리합니다. */
  hrefOpen?: string;
  /** 해당 버튼을 Redirect 하는 용도로 사용합니다. */
  redirect?: string;
  /** 길이 조정 */
  width?: 'auto' | 'large' | 'huge';
  /** 폰트 색상을 강제합니다. */
  color?: JDColor;
  /** 음수 마진으로 패딩값을 소모시킵니다. 패딩 곂침을 해야할때 유용합니다. */
  cunsumPadding?: boolean;
  // ClassAdd
  toggle?: boolean;

}

export interface IButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
  JDatomExtentionSet,
  IButtonConstum {
  color?: JDColor | "white"
}

const modeClass = (mode?: Tshape | Tshape[], thema?: JDColor | null, color?: JDColor) => {
  let obj = {};

  if (mode) {
    obj = {
      'JDbtn--flat': mode.includes('flat'),
      'JDbtn--border': mode.includes('border'),
      'JDbtn--iconButton': mode.includes('iconButton'),
      'JDoutborder-color': !thema && mode.includes('border'),
    };
  }

  if (thema) {
    if (mode?.includes('border')) {
      obj = {
        ...obj,
        ...borderClass(thema),
        ...textColorClass(thema),
      };
    } else {
      obj = {
        ...obj,
        ...bgColorClass(thema),
        ...textColorClass(color),
      };
    }
  }

  return obj;
};

export const Button: React.FC<IButtonProps> = ({
  disabled,
  label,
  iconProp,
  tooltip,
  onClick,
  dataTip,
  dataFor,
  mode = 'normal',
  cunsumPadding,
  type,
  color,
  thema,
  padding = 'large',
  redirect,
  pulse,
  blink,
  loading,
  br = 'round',
  children,
  className,
  size,
  hrefOpen,
  toggle,
  width,
  ...props
}: IButtonProps) => {
  const classes = classNames('JDbtn JDhover', className, {
    'JDbtn--pno': padding === 'no',
    'JDbtn--ptiny': padding === 'tiny',
    'JDbtn--plargest': padding === 'largest',
    'JDbtn--plarge': padding === 'large',
    'JDbtn--phuge': padding === 'huge',
    'JDbtn--whuge': width === 'huge',
    'JDbtn--wlarge': width === 'large',
    'JDbtn--wauto': width === 'auto',
    'JDbtn--tiny': size === 'tiny',
    'JDbtn--small': size === 'small',
    'JDbtn--large': size === 'large' || size === 'longLarge',
    'JDbtn--long': size === 'long' || size === 'longLarge',
    'JDbtn--round': br === 'round',
    'JDbtn--unRound': br === 'no',
    'JDbtn--text-white': color === 'white',
    'JDbtn--pulse': pulse,
    'JDbtn--toogleOn': toggle === true,
    'JDbtn--toogle111Off': toggle === false,
    'JDbtn--cunsumPadding': cunsumPadding,
    'JDtext-blink': blink,
    'visibility-none': props.hidden,
    ...useMemo(() => modeClass(mode, thema), [mode, thema], color),
    ...JDatomClasses(props),
  });

  const handleClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    hrefOpen && window.open(hrefOpen);
    if (redirect) document.location.href = redirect;
    if (typeof label === 'string') userTacking(label);

    onClick && onClick(event);
  };

  const withIcon = !loading && iconProp;

  let newId = '';
  let tooltipObj = {
    'data-tip': dataTip,
    'data-for': dataFor,
  };

  if (tooltip) {
    newId = s4();
    tooltipObj = {
      'data-for': true,
      'data-tip': `btnTooltip${newId}`,
    };
  }

  if (mode?.includes('iconButton')) {
    return (
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect ${classes}`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        {...tooltipObj}
      >
        <div>
          <JDIcon {...iconProp!} />
        </div>
        <JDtypho
          hide={Boolean(label)}
          className="JDbtn--iconButton__label"
          size="tiny"
        >
          {label}
        </JDtypho>
        {tooltip && (
          <Tooltip type="dark" effect="solid" id={`btnTooltip${newId}`}>
            <span>{tooltip}</span>
          </Tooltip>
        )}
      </button>
    );
  }

  return (
    <Fragment>
      <button
        {...props}
        type={type}
        disabled={disabled}
        className={`JDbtn JDwaves-effect ${classes}`}
        onClick={handleClickButton}
        onKeyPress={handleKeyPress}
        data-tip={tooltip ? true : dataTip}
        data-for={tooltip ? `btnTooltip${newId}` : dataFor}
      >
        <span className="JDbtn__contents">
          {children}
          <Preloader loading={loading} />
          {label}
          {withIcon && (
            <i className={`JDbtn__icon`}>
              <JDIcon {...iconProp!} />
            </i>
          )}
        </span>
      </button>
      {tooltip && (
        <Tooltip type="dark" effect="solid" id={`btnTooltip${newId}`}>
          <span>{tooltip}</span>
        </Tooltip>
      )}
    </Fragment>
  );
};

export const ButtonMemo = React.memo(Button);
export default Button;
