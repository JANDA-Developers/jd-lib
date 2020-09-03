import React from "react";
import { TMarginSize } from "../../types/enum";
import { IIcons, IconConifgProps } from "../icons/declation";
export interface IInputTextCutsomProp {
    placeholder?: string;
    readOnly?: boolean;
    disabled?: boolean;
    textarea?: boolean;
    /** Border-radius */
    br?: "round" | "normal";
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
    /** Defrecated */
    size?: any;
    /** 라벨 */
    type?: string;
    /** 텍스트를 가운데로 정렬함 */
    textAlign?: "center";
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
    bg?: "grey" | "noraml";
    /** 벨리데이션 (API 수정필요함) */
    validation?: any;
    onChange?(value?: any): void;
    onChangeValid?: any;
    onBlur?(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): any;
    isValid?: any;
    value?: any;
    max?: any;
    defaultValue?: any;
    hyphen?: boolean;
    comma?: boolean;
    card?: boolean;
    loading?: boolean;
    returnNumber?: boolean;
    allWaysShowValidMessage?: boolean;
    className?: string;
    unValidMessage?: string;
    wrapClassName?: string;
    maxLength?: number;
    minLength?: number;
    falseMessage?: string;
    sizes?: string;
    mr?: TMarginSize;
    mb?: TMarginSize;
    iconProps?: IconConifgProps;
}
export declare const TypeInputText: React.FC<IInputTextCutsomProp>;
export declare const InputText: React.ForwardRefExoticComponent<IInputTextCutsomProp & React.AllHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
declare const MemoInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<IInputTextCutsomProp & React.AllHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
export default MemoInput;
