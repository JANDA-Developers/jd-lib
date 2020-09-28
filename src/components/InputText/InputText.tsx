import React, { useEffect, useState, useMemo, forwardRef } from 'react';
import classNames from 'classnames';
import JDicon from '../icons/Icons';
import autoHyphen, {
  numberStr,
  toNumber,
  card_space,
} from '../../utils/autoFormat';
import { TMarginSize } from '../../types/enum';
import { autoComma } from '../../utils/autoFormat';
import $ from 'jquery';
import s4 from '../../utils/keyGen';
import JDlabel from '../label/JDLabel';
import { JDmrClass, JDmbClass } from '../../utils/autoClasses';
import { IIcons, IconConifgProps } from '../icons/declation';
import Preloader from '../preloader/Preloader';
import userTacking from '../../utils/userTracking';
import { JDinputExtention, IInput, IDiv } from '../../types/interface';

export interface IInputTextCutsomProp extends JDinputExtention, IInput {
  wrapProp?: IDiv;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 일기전용 */
  readOnly?: boolean;
  /** 사용불가 */
  disabled?: boolean;
  /** 텍스트 어리어로 전환함 */
  textarea?: boolean;
  /** 언더라인 모양 변화 */
  underline?: boolean;
  /** Border-radius */
  br?: 'round' | 'normal';
  /** 스크롤 */
  scroll?: boolean;
  /** textarea 일때 높이값 Deprecated */
  doubleHeight?: boolean;
  /** textarea 일때 높이값 Deprecated */
  halfHeight?: boolean;
  /** text가 넘칠경우 행동 ... 으로 바꿈 */
  overfloweEllipsis?: boolean;
  /** 라벨 */
  label?: string;
  /** New */
  Size?: 'big' | 'small';
  /** 라벨 */
  type?: string;
  /** 텍스트를 가운데로 정렬함 */
  textAlign?: 'center';
  /** Deprecated */
  dataError?: string;
  /** 우측끝에 아이콘을 추가함 */
  icon?: IIcons;
  /** will Deprecated */
  iconHover?: boolean;
  /** TextArea 높이를 자동으로 잡아줌 */
  autoHeight?: boolean;
  /** will Deprecated */
  iconOnClick?: any;
  /** Deprecated */
  dataSuccess?: string;
  /** 백그라운드 색상 */
  bg?: 'grey' | 'noraml';
  /** 벨리데이션 (API 수정필요함) */
  validation?: any;
  onChange?(value?: any): void;
  onChangeValid?: any;
  onBlur?(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): any;
  isValid?: any;
  value?: any;
  /** 최대글자 */
  max?: number;
  defaultValue?: any;
  /** 자동 전화번호 표시를 함 */
  hyphen?: boolean;
  /** 자동 원화 표시를함 */
  comma?: boolean;
  /** 자동 카드 표시 스페이싱을함 4자리 4자리 4자리 4자리 */
  card?: boolean;
  loading?: boolean;
  returnNumber?: boolean;
  allWaysShowValidMessage?: boolean;
  className?: string;
  /** 벨리데이션이 실패 했을때 메세지 */
  unValidMessage?: string;
  wrapClassName?: string;
  maxLength?: number;
  minLength?: number;
  falseMessage?: string;
  mr?: TMarginSize;
  mb?: TMarginSize;
  iconProps?: IconConifgProps;
}

export const TypeInputText: React.FC<IInputTextCutsomProp> = () => <div />;

export const InputText = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  IInputTextCutsomProp &
  React.AllHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>
>(
  (
    {
      readOnly,
      label,
      disabled,
      type,
      returnNumber,
      validation,
      wrapProp,
      onChange,
      className,
      bg,
      onBlur,
      max,
      loading,
      isValid,
      onChangeValid,
      textarea,
      scroll,
      value,
      br,
      defaultValue, // UNcontrolled
      doubleHeight,
      halfHeight,
      autoHeight,
      dataError,
      dataSuccess,
      overfloweEllipsis,
      allWaysShowValidMessage,
      icon,
      unValidMessage,
      iconOnClick,
      textAlign,
      iconHover,
      underline,
      hyphen,
      card,
      wrapClassName,
      comma,
      mr,
      mb,
      falseMessage,
      id,
      iconProps,
      require,
      Size,
      ...props
    },
    refContainer
  ) => {
    const [selfValid, setSelfValid] = useState<boolean | ''>('');

    const valueFormat = (inValue: any) => {
      let inInValue = inValue;

      if (typeof inValue === 'number') {
        if (isNaN(inInValue)) inInValue = '';
        inInValue = inInValue.toString();
      }
      if (typeof inInValue === 'string') {
        if (card) return card_space(inInValue);
        if (hyphen) return autoHyphen(inInValue);
        if (comma) return autoComma(inInValue);
        return inInValue;
      }
      return undefined;
    };

    const inHandleChange = (event: any) => {
      const { target } = event;
      const result = validation(target.value, max);
      autoChangeHeight();

      if (onChange) {
        if (hyphen || comma) {
          if (typeof value === 'number' || returnNumber) {
            onChange(toNumber(target.value));
          } else {
            onChange(numberStr(target.value));
          }
        } else if (card) {
          onChange(target.value.replace(/ /gi, ''));
        } else onChange(target.value || '');
      }

      onChangeValid ? onChangeValid(result) : setSelfValid(result);

      if (!value && (hyphen || comma)) {
        target.value = valueFormat(target.value);
      }
    };

    const wrapClasses = classNames('JDinput-wrap', wrapClassName + " " + wrapProp?.className || "", {
      'JDinput-wrap--big': Size === 'big',
      'JDinput-wrap--small': Size === 'small',
      'JDinput-wrap--round': br === 'round',
      ...JDmrClass(mr),
      ...JDmbClass(mb),
    });

    const classes = classNames(textarea ? 'JDtextarea' : 'JDinput', className, {
      'JDinput--greyBg': bg === 'grey',
      'JDinput--overfloweEllipsis': overfloweEllipsis,
      'JDinput--labeled': label && !textarea,
      'JDinput--center': textAlign === 'center',
      'JDinput--withIcon': icon,
      'JDinput--underline': underline,
      'JDinput--valid': (isValid === true || selfValid === true) && !textarea,
      'JDinput--invalid':
        (isValid === false || selfValid === false) && !textarea,
      'JDinput--allWaysShowValidMessage':
        allWaysShowValidMessage === true && !textarea,
      /* --------------------------------- 텍스트어리어 --------------------------------- */
      'JDtextarea--autoHeight': autoHeight,
      'JDtextarea--labeled': label && textarea,
      'JDtextarea--scroll': scroll && textarea,
      'JDtextarea--doubleHeight': doubleHeight && textarea,
      'JDtextarea--halfHeight': halfHeight && textarea,
      'JDtextarea--valid': isValid === true,
      'JDtextarea--invalid': isValid === false,
    });

    const autoChangeHeight = () => {
      if (autoHeight) {
        const target = $(`.JDtextarea${newId}`);
        target.height('auto').height(target.prop('scrollHeight') + 12);
      }
    };

    useEffect(() => {
      autoChangeHeight();
    });

    const newId = useMemo(() => s4(), []);

    const formatedValue = valueFormat(value);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      event.persist();
      const {
        currentTarget: { value },
      } = event;
      userTacking(label, value);
      onBlur && onBlur(event);
    };

    // 인풋 과 텍스트어리어 경계
    return !textarea ? (
      <div className={wrapClasses} {...wrapProp}>
        {label && (
          <JDlabel require={require} txt={label} className="JDinput_label" />
        )}
        <div className="JDinput__inside-wrap">
          <input
            onChange={inHandleChange}
            disabled={disabled}
            readOnly={readOnly}
            onBlur={handleBlur}
            type={type}
            value={formatedValue}
            // @ts-ignore
            ref={refContainer}
            data-color="1213"
            className={classes}
            maxLength={max}
            {...props}
            id={id}
          />
          {
            <span className="JDinput-iconWrap">
              {loading ? (
                <Preloader noAnimation loading={loading} />
              ) : (
                  icon && (
                    <JDicon
                      size={'normal'}
                      onClick={iconOnClick}
                      hover={iconHover}
                      icon={icon}
                      {...iconProps}
                    />
                  )
                )}
            </span>
          }
          {falseMessage && (
            <span className="JDinput__falseMessage">
              <JDicon mr="tiny" mb="no" color="error" icon="help" />{' '}
              {falseMessage}
            </span>
          )}
        </div>
      </div>
    ) : (
        <div className={wrapClasses} {...wrapProp}>
          <textarea
            disabled={disabled}
            value={formatedValue || undefined}
            onKeyDown={e => {
              e.nativeEvent.stopImmediatePropagation();
              e.stopPropagation();
            }}
            onKeyPress={e => {
              e.nativeEvent.stopImmediatePropagation();
              e.stopPropagation();
            }}
            onChange={inHandleChange}
            onBlur={onBlur}
            className={classes + ` JDtextarea${newId}`}
            readOnly={readOnly}
            id={id}
            // @ts-ignore
            ref={refContainer}
            {...props}
          />
          <label htmlFor="JDtextarea" className="JDtextarea_label">
            {label}
          </label>
        </div>
      );
  }
);

InputText.defaultProps = {
  readOnly: false,
  disabled: false,
  textarea: false,
  scroll: false,
  doubleHeight: false,
  label: '',
  type: '',
  dataError: '',
  dataSuccess: '',
  isValid: '',
  validation: () => '',
  max: 10000,
  value: undefined,
};

const MemoInput = React.memo(InputText);
export default MemoInput;
