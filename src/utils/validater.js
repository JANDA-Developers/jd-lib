// 빈 문자열이면 중립을 반환합니다.

const isUrl = string => {
  if (string === "") return "";
  const regExp = /^http(s)?:\/\/(www\.)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return regExp.test(string);
};

const isPhone = string => {
  if (string === "") return "";
  const result = string.replace(/[\s-]+/g, "");
  const validation =
    result.length >= 10 && result.length < 14 && /^[0-9+]+\w$/g.test(result);
  return validation;
};

const isHaveScharacter = string => {
  var regExp = /[~!@#$%^&*()_+|<>?:{}]/;
  return regExp.test(string);
};

const isLengthIn = (string, max, min) => {
  return string.length <= max && min < string.length;
};

const isIncludeSpecialChar = string => {
  const regExp = /[!@#$%^&*(),?"{}|<>]/g;
  return regExp.test(string);
};

const isName = string => {
  if (string === "") return "";
  const regExp = /[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9 .'_]+$/gi;
  const maxLen = 60;
  const validation = string.length <= maxLen && regExp.test(string);
  return validation;
};

const isYYYYMMDD = string => {
  const regExp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  // const regExp2 = /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;
  let validation = regExp.test(string);
  // if (!validation) validation = regExp2.test(string);
  return validation;
};

const isEmail = string => {
  if (string === "") return "";
  const regExp = /^[-$.^_=+0-9A-Za-z~]+@[-$%/0-9=?A-Z^_a-z~]+.[0-9A-Za-z~]+\w$/;
  return regExp.test(string);
};

const isHaveNumber = string => {
  var regExp = /[0-9]/;
  return regExp.test(string);
};

const isMaxOver = (string, max) => {
  if (string === "") return "";
  const val = string.length;
  return val <= max;
};

const isPassword = string => {
  if (string === "") return "";
  // 특수문자 1개이상 숫자 0 에서  9  7~15 자리의 숫자
  const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*_\-~;?/])[a-zA-Z0-9!@#$%^&*_\-~;?/]{7,15}$/gi;
  return regExp.test(string);
};

const isNumberMinMax = (string, min, max) => {
  if (string === "") return "";
  // 특수문자 1개이상 숫자 0 에서  9  7~15 자리의 숫자
  const regExp = new RegExp(`[0-9_-]{${min},${max}}`);
  return regExp.test(string);
};

const isNumber = value => {
  return /^\d*$/.test(value);
};

export {
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
  isIncludeSpecialChar
};
