import {
  JDColor,
  TextAlign,
  TextSize,
  IconSize,
  TMarginSize
} from "../types/enum";
import { JDatomExtentionSet } from "../types/interface";

// 업데이트 => 구성요소에 들어가는 글로벌 css를 이걸로교체
// 우선은 마진만 시험적용
// 이걸로 하면 css를 줄일수있음
// 성능차이를 기대하진 않지만 그떄마다 클래스를 쓰지 않고
// 글로벌 css를 사용하는건 문맥상 좋아보이지 않음 ㅠ
const JDmrClass = (size?: TMarginSize | null) => {
  let obj: any = {};
  obj[`JDstandard-space0`] = size === "no";
  obj[`JDstandard-superTiny-space`] = size === "tiny";
  obj[`JDstandard-tiny-space`] = size === "tiny";
  obj[`JDstandard-small-space`] = size === "small";
  obj[`JDstandard-space`] = size === "normal";
  obj[`JDstandard-large-space`] = size === "large";
  obj[`JDstandard-huge-space`] = size === "huge";
  obj[`JDstandard-largest-space`] = size === "largest";

  return obj;
};

const JDmbClass = (size?: TMarginSize) => {
  let obj: any = {};
  obj[`JDstandard-mb0`] = size === "no";
  obj[`JDstandard-largest-mb`] = size === "largest";
  obj[`JDstandard-huge-mb`] = size === "huge";
  obj[`JDstandard-large-mb`] = size === "large";
  obj[`JDstandard-margin-bottom`] = size === "normal";
  obj[`JDstandard-small-mb`] = size === "small";
  obj[`JDstandard-tiny-mb`] = size === "tiny";
  obj[`JDstandard-superTiny-mb`] = size === "superTiny";

  return obj;
};

// mixin 파일의
const iconSizeClass = (boxName: string, size?: IconSize | null) => {
  let obj: any = {};
  obj[`${boxName}--tiny`] = size === "tiny";
  obj[`${boxName}--small`] = size === "small";
  obj[`${boxName}--normal`] = size === "normal";
  obj[`${boxName}--large`] = size === "large";
  obj[`${boxName}--huge`] = size === "huge";
  obj[`${boxName}--largest`] = size === "largest";
  obj[`${boxName}--largest2`] = size === "largest2";

  return obj;
};

// --prefixer 와 함께 동작함
const colorClass = (boxName: string, color?: JDColor | null) => {
  let obj: any = {};
  obj[`${boxName}--primary`] = color === "primary";
  obj[`${boxName}--point`] = color === "point";
  obj[`${boxName}--positive`] = color === "positive";
  obj[`${boxName}--warn`] = color === "warn";
  obj[`${boxName}--grey1`] = color === "grey1";
  obj[`${boxName}--grey2`] = color === "grey2";
  obj[`${boxName}--grey3`] = color === "grey3";
  obj[`${boxName}--grey4`] = color === "grey4";
  obj[`${boxName}--grey5`] = color === "grey5";
  obj[`${boxName}--darkPrimary`] = color === "darkPrimary";
  obj[`${boxName}--error`] = color === "error";
  obj[`${boxName}--new`] = color === "new";
  obj[`${boxName}--black`] = color === "black";
  obj[`${boxName}--white`] = color === "white";
  obj[`${boxName}--blue`] = color === "blue";
  obj[`${boxName}--third`] = color === "third";

  return obj;
};

const bgColorClass = (color?: JDColor | null) => {
  let obj: any = {};
  if (!color) return {};
  obj[`JDbgColor--primary`] = color === "primary";
  obj[`JDbgColor--point`] = color === "point";
  obj[`JDbgColor--positive`] = color === "positive";
  obj[`JDbgColor--warn`] = color === "warn";
  obj[`JDbgColor--grey1`] = color === "grey1";
  obj[`JDbgColor--grey2`] = color === "grey2";
  obj[`JDbgColor--grey3`] = color === "grey3";
  obj[`JDbgColor--grey4`] = color === "grey4";
  obj[`JDbgColor--grey5`] = color === "grey5";
  obj[`JDbgColor--darkPrimary`] = color === "darkPrimary";
  obj[`JDbgColor--error`] = color === "error";
  obj[`JDbgColor--new`] = color === "new";
  obj[`JDbgColor--black`] = color === "black";
  obj[`JDbgColor--white`] = color === "white";
  obj[`JDbgColor--blue`] = color === "blue";
  obj[`JDbgColor--third`] = color === "third";

  return obj;
};

const textAlignClass = (boxName: string, align?: TextAlign) => {
  let obj: any = {};
  obj[`${boxName}--left`] = align === "left";
  obj[`${boxName}--center`] = align === "center";
  obj[`${boxName}--right`] = align === "right";

  return obj;
};

const textSizeClass = (boxName: string, size?: TextSize) => {
  let obj: any = {};
  (obj[`${boxName}--h1`] = size === "h1"),
    (obj[`${boxName}--h2`] = size === "h2"),
    (obj[`${boxName}--h3`] = size === "h3"),
    (obj[`${boxName}--h4`] = size === "h4"),
    (obj[`${boxName}--h5`] = size === "h5"),
    (obj[`${boxName}--h6`] = size === "h6"),
    (obj[`JDlarge-text`] = size === "large"),
    (obj[`JDsmall-text`] = size === "normal"),
    (obj[`JDsmall-text`] = size === "small"),
    (obj[`JDtiny-text`] = size === "tiny"),
    (obj[`${boxName}--superTiny`] = size === "superTiny");

  return obj;
};

const mbClass = (boxName: string, size?: TMarginSize) => {
  let obj: any = {};
  obj[`${boxName}--largest-mb`] = size === "largest";
  obj[`${boxName}--huge-mb`] = size === "huge";
  obj[`${boxName}--large-mb`] = size === "large";
  obj[`${boxName}--space-mb`] = size === "normal";
  obj[`${boxName}--small-mb`] = size === "small";
  obj[`${boxName}--tiny-mb`] = size === "tiny";
  obj[`${boxName}--superTiny-mb`] = size === "superTiny";

  return obj;
};

const JDatomClasses = (configs: JDatomExtentionSet) => {
  const { mb, mr } = configs;
  return {
    ...JDmrClass(mr),
    ...JDmbClass(mb)
  };
};

export {
  JDatomClasses,
  iconSizeClass,
  JDmbClass,
  JDmrClass,
  mbClass,
  bgColorClass,
  textAlignClass,
  colorClass,
  textSizeClass
};
