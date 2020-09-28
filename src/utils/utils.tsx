// 유틸리티가 더 많이 쌓이면
import isEmpty from "./isEmptyData";
import autoHypen, {
  autoComma,
  numberStr,
  toNumber,
  card_space,
  dateRangeFormat,
  removeSpecialChar,
} from "./autoFormat";
import { share } from "./share";
import { getFromUrl, getAllFromUrl } from "./getFromUrl";
import copytoClipboard from "./copyToClipboard";
import insideRedirect from "./insideRedirect";
import dataURLtoFile from "./dataURLtoFile";
import { textAlignClass, JDatomClasses } from "./autoClasses";
import searchListFormat from "./searchListFormater";
import queryDataFormater, { getFromResult } from "./queryFormater";
import setMidNight, { to4YMMDD } from "./setMidNight";
import removeNullOfObject from "./removeNullOfObject";
import s4 from "./keyGen";
import {
  getScrollParent,
  parentScrollMove,
  parentScrollMoveToElement,
  focusWithScroll,
} from "./parentScroll";
import { fromToRender } from "./fromToRender";
import randomIntFromInterval from "./randomNumber";
import muResult from "./mutationResultSafty";
import instanceOfA from "./interfaceMatch";
import jsonString from "./jsonString";
import { selectOpCreater, enumToOption } from "./selectOptionCreater";
import isLast from "./isLast";
import { arraySum } from "./elses";
import onCompletedMessage from "./onCompletedMessage";
import { eraseCookie, getCookie, setCookie } from "./cookies";
import { updateURLParameter } from "./updateURLParameter"
import {
  isEmail,
  isNumber,
  isYYYYMMDD,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
} from "./validater";
import { LocalManager } from "./localManager"
import { printRecipt } from "./printRecipt"
const JDutils = {
  eraseCookie,
  getCookie,
  setCookie,
  LocalManager,
  printRecipt,
  dataURLtoFile,
  enumToOption,
  card_space,
  textAlignClass,
  arraySum,
  selectOpCreater,
  randomIntFromInterval,
  searchListFormat,
  autoHypen,
  getScrollParent,
  parentScrollMove,
  parentScrollMoveToElement,
  focusWithScroll,
  queryDataFormater,
  onCompletedMessage,
  setMidNight,
  autoComma,
  numberStr,
  fromToRender,
  toNumber,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  s4,
  JDatomClasses,
  getFromResult,
  removeSpecialChar,
  dateRangeFormat,
  share,
  isLast,
  isEmpty,
  isEmail,
  isNumber,
  isYYYYMMDD,
  isPhone,
  isName,
  isUrl,
  isMaxOver,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
  to4YMMDD,
  getFromUrl,
  getAllFromUrl,
  copytoClipboard,
  updateURLParameter,
};

export {
  isEmpty,
  card_space,
  textAlignClass,
  arraySum,
  dataURLtoFile,
  randomIntFromInterval,
  searchListFormat,
  autoHypen,
  queryDataFormater,
  onCompletedMessage,
  setMidNight,
  autoComma,
  isLast,
  numberStr,
  fromToRender,
  toNumber,
  muResult,
  removeNullOfObject,
  jsonString,
  insideRedirect,
  instanceOfA,
  s4,
  getFromResult,
  isEmail,
  removeSpecialChar,
  dateRangeFormat,
  isNumber,
  isYYYYMMDD,
  isPhone,
  JDatomClasses,
  updateURLParameter,
  getFromUrl,
  copytoClipboard,
  isName,
  getAllFromUrl,
  isUrl,
  isMaxOver,
  to4YMMDD,
  isPassword,
  isNumberMinMax,
  isLengthIn,
  isHaveScharacter,
  isHaveNumber,
  isIncludeSpecialChar,
  share
};
export default JDutils;
