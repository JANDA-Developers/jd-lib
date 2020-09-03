export enum DateFormat {
  WITH_TIME = "YY.MM.DD HH:mm",
  YYMMDD = "YY.MM.DD",
  MMDD = "MM.DD"
}

export enum Language {
  KOREAN = "KOREAN",
  ENGLISH = "ENGLISH",
  JAPANESE = "JAPANESE",
  CHINESE = "CHINESE"
}

export enum WindowSizeNumber {
  MOBILE = 400,
  PHABLET = 550,
  TABLET = 750,
  DESKTOP = 1000,
  DESKTOPHD = 1200
}

export enum WindowSizeShort {
  MOBILE = "sm",
  PHABLET = "md",
  TABLET = "wmd",
  DESKTOP = "lg",
  DESKTOPHD = "wlg"
}

export enum WindowSize {
  sm = "sm",
  md = "sm",
  wmd = "wmd",
  lg = "lg",
  wlg = "wlg",
  full = "full"
}

export type TNationalShort = "kr" | "gb" | "jp" | "cn";
export type TLanguageShort = "kr" | "en" | "jp" | "cn";

export enum LanguageShortResverse {
  kr = "KOREAN",
  jp = "JAPANESE",
  cn = "CHINESE",
  en = "ENGLISH"
}

export enum LanguageResverseShort {
  KOREAN = "kr",
  ENGLISH = "en",
  JAPANESE = "jp",
  CHINESE = "cn"
}

export enum LangShortToNational {
  kr = "kr",
  en = "gb",
  jp = "jp",
  cn = "cn"
}

export enum LanguageItSelf {
  KOREAN = "한국어",
  ENGLISH = "English",
  JAPANESE = "日本語",
  CHINESE = "中國語"
}

export type TMarginSize =
  | "no"
  | "largest"
  | "huge"
  | "large"
  | "normal"
  | "small"
  | "tiny"
  | "superTiny";
export type TextAlign = "left" | "right" | "center";
export type TextSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "large"
  | "normal"
  | "small"
  | "tiny"
  | "superTiny";

export enum RoomGender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  ANY = "ANY",
  SEPARATELY = "SEPARATELY"
}

//= =============================================================
// START Enums from Front End
//= =============================================================

export enum TimePerMs {
  DAY = 24 * 60 * 60 * 1000,
  H = 60 * 60 * 1000,
  M = 60 * 1000
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE"
}

export enum ExcelExpress {
  SELECT_OP = "SELECT_OP",
  DATE_OP = "DATE_OP",
  COUNT_OP = "COUNT_OP"
}

export enum NotiType {
  ELSE = "ELSE",
  NEW_BOOKING = "NEW_BOOKING",
  PRODUCT_EXPIRE = "PRODUCT_EXPIRE",
  TO_ALL = "TO_ALL"
}

export type IconSize =
  | "tiny"
  | "small"
  | "normal"
  | "large"
  | "huge"
  | "largest"
  | "largest2";

export type JDColor =
  | "darkPrimary"
  | "primary"
  | "third"
  | "point"
  | "new"
  | "warn"
  | "error"
  | "black"
  | "white"
  | "grey1"
  | "grey2"
  | "grey3"
  | "grey4"
  | "grey5"
  | "normal"
  | "blue"
  | "positive";

export enum Funnels {
  AGODA = "AGODA",
  AIRBNB = "AIRBNB",
  BOOKING_COM = "BOOKING_COM",
  COOPANG = "COOPANG",
  ELSE_CHANNEL = "ELSE_CHANNEL",
  FREINDS = "FREINDS",
  HOMEPAGE = "HOMEPAGE",
  NAVER = "NAVER",
  PHONE_CALL = "PHONE_CALL",
  WALK_IN = "WALK_IN",
  YANOLJA = "YANOLJA",
  YEOGIEOTTAE = "YEOGIEOTTAE"
}

export enum SendTarget {
  BOTH = "BOTH",
  GUEST = "GUEST",
  HOST = "HOST"
}

export enum LayoutType {
  Layout_A = "Layout_A",
  Layout_B = "Layout_B"
}

export enum Day {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED"
}
