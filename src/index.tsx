import JDbutton, { ButtonMemo } from './components/button/Button';
import JDicon from './components/icons/Icons';
import JDtooltip from './components/tooltip/Tooltip';
import JDcard from './components/cards/Card';
import JDdropDown from './components/dropDown/DropDown';
import JDcheckBox from './components/checkbox/CheckBox';
import Toast from './components/toast/Toast';
import JDmodal, { JDmodalConfigProps } from './components/modal/Modal';
import JDlabel from './components/label/JDLabel';
import JDbadge from './components/badge/Badge';
import JDsplinter from './components/splinter/Splinter';
import JDswitch from './components/switch/Switch';
import JDrequireMark from './components/requireMark/RequireMark';
import JDpreloader from './components/preloader/Preloader';
import JDpreloaderModal from './components/preloaderModal/PreloaderModal';
import InputText from './components/InputText/InputText';
import JDalign, { IJDalignProp } from './components/align/Align';
import JDcontainer from './components/container/Container';
import JDtypho from './components/typho/Typho';
import JDpolicyViewer from './components/policy/PolicyViewer';
import JDshareBtn from './components/social/ShareBtn';
import JDsocialHead from './components/social/SocialHead';
import JDavatar from './components/avatar/Avatar';
import JDcolorPicker from './components/colorPicker/JDcolorPicker';
import JDphotoModal, {
  TPhotoModalInfo,
} from './components/photoModal/PhotoModal';
import JDselect from './components/select/SelectBox';
import JDdayPicker, { TDayPickerDot } from './components/dayPicker/DayPicker';
import JDdayPickerModal from './components/dayPickerModal/DayPickerModal';
import JDslider, {
  Slide as JDslide,
  TJDsliderProp,
} from './components/slider/Slider';
import JDphotoFrame from './components/photoFrame/PhotoFrame';
import JDdoc, {
  DocHeader as JDdocHeader,
  DocSection as JDdocSection,
} from './components/doc/Doc';
import JDconfiger from './components/configer/Configer';
import JDlogo from './components/logo/Logo';
import JDlist from './components/list/List';
import TooltipList, {
  ReactTooltip,
  TooltipButtons,
  TButtonProp,
} from './components/tooltipList/TooltipList';
import TimePicker from './components/timepicker/Timepicker';
import TimePickerRanger from './components/timepicker/TimePickerRanger';
import JDpriceViewer from './components/priceViewer/PriceViewer';
import JDpagination from './components/pagination/Pagination';
import JDradio from './components/radio/Radio';
import JDradioButton from './components/radioButton/RadioButton';
import JDfileManager from './components/fileManager/FileManager';
import JDFileManagerModal from './components/fileManager/FileManagerModal';
import JDPasswordReseter from './components/passwordFinder/PasswordFinder';
import JDSecurityViewer from './components/securityViewer/SecurityViewer';
import JDsearchInput, {
  IJDsearchInputProp,
} from './components/searchInput/SearchInput';
import {
  IDateModalProps,
  ISearchViewData,
} from './components/searchInput/DataModal';
import JDsingleUploader from './components/fileUploader/SingleUploader';
import { DEFAULT_PAGINATION_SETTING } from './types/defaults';
import { JDtabs, Tab, TabList, TabPanel } from './components/tabs/Tabs';
import hooks, {
  IUseModal,
  IUseColor,
  IUseDrawer,
  IUseDayPicker,
  IuseFilesManager,
  IUseSelect,
  IusePagination,
  IuseImageUploaderOption,
  IUseTimePicker,
} from './hooks/hook';
import {
  JDColor,
  Day,
  IconSize,
  TextSize,
  TMarginSize,
  WindowSize,
  WindowSizeNumber,
} from './types/enum';
import { DEFAULT_PHOTO } from './types/defaults';
import utils from './utils/utils';
import { toast } from 'react-toastify';

const {
  useCheckBox,
  useDayPicker,
  useDebounce,
  useInput,
  useModal,
  useWindowSize,
  usePagination,
  useRadioButton,
  useRadio,
  useRange,
  useRedirect,
  useSelect,
  useShouldSave,
  useSideNav,
  useStoreSelect,
  useDropDown,
  useSwitch,
  useToggle,
  useFilesManager,
  useColorPicker,
  useTimePicker,
} = hooks;

//TODO 유틸만 따로 모듈 분리
const {
  JDatomClasses,
  arraySum,
  autoComma,
  autoHypen,
  card_space,
  to4YMMDD,
  dateRangeFormat,
  fromToRender,
  getFromResult,
  insideRedirect,
  instanceOfA,
  isEmail,
  enumToOption,
  selectOpCreater,
  isEmpty,
  isHaveNumber,
  isHaveScharacter,
  isIncludeSpecialChar,
  isLast,
  isLengthIn,
  isMaxOver,
  isName,
  isNumber,
  isNumberMinMax,
  isPassword,
  isPhone,
  isUrl,
  isYYYYMMDD,
  jsonString,
  muResult,
  numberStr,
  onCompletedMessage,
  queryDataFormater,
  randomIntFromInterval,
  removeNullOfObject,
  removeSpecialChar,
  s4,
  searchListFormat,
  setMidNight,
  textAlignClass,
  toNumber,
  getFromUrl,
  getAllFromUrl,
  copytoClipboard,
  dataURLtoFile,
  share,
  updateURLParameter,
  parentScrollMove,
  parentScrollMoveToElement,
  eraseCookie,
  focusWithScroll,
  getCookie,
  getScrollParent,
  setCookie,
} = utils;

export {
  TimePicker,
  IUseTimePicker,
  parentScrollMove,
  parentScrollMoveToElement,
  eraseCookie,
  focusWithScroll,
  getCookie,
  getScrollParent,
  setCookie,
  TDayPickerDot,
  JDtypho,
  JDslider,
  JDshareBtn,
  JDbadge,
  JDslide,
  JDselect,
  JDconfiger,
  JDsocialHead,
  JDcolorPicker,
  TimePickerRanger,
  to4YMMDD,
  JDradioButton,
  WindowSize,
  WindowSizeNumber,
  JDdayPicker,
  JDdayPickerModal,
  JDphotoFrame,
  JDpagination,
  JDmodalConfigProps,
  useCheckBox,
  JDdropDown,
  JDalign,
  JDcheckBox,
  useDayPicker,
  useDebounce,
  useInput,
  useDropDown,
  useModal,
  usePagination,
  useRadio,
  useRange,
  useRedirect,
  useWindowSize,
  useSelect,
  useShouldSave,
  useSideNav,
  useStoreSelect,
  useSwitch,
  useTimePicker,
  useToggle,
  useRadioButton,
  useColorPicker,
  DEFAULT_PHOTO,
  JDbutton,
  ButtonMemo,
  JDColor,
  JDlogo,
  Day,
  IconSize,
  TPhotoModalInfo,
  JDicon,
  TextSize,
  TMarginSize,
  JDtooltip,
  hooks,
  useFilesManager,
  IuseFilesManager,
  IUseModal,
  IUseColor,
  IUseDrawer,
  IUseDayPicker,
  IUseSelect,
  IJDalignProp,
  JDpolicyViewer,
  IusePagination,
  JDFileManagerModal,
  JDsingleUploader,
  JDSecurityViewer,
  JDPasswordReseter,
  IuseImageUploaderOption,
  dataURLtoFile,
  JDcard,
  JDmodal,
  JDavatar,
  ReactTooltip,
  JDradio,
  JDlist,
  JDpriceViewer,
  JDcontainer,
  TabPanel,
  Tab,
  TabList,
  TooltipButtons,
  JDtabs,
  JDsplinter,
  selectOpCreater,
  enumToOption,
  JDpreloaderModal,
  IDateModalProps,
  ISearchViewData,
  TJDsliderProp,
  IJDsearchInputProp,
  JDsearchInput,
  TButtonProp,
  JDpreloader,
  JDlabel,
  utils,
  JDdoc,
  JDswitch,
  JDdocHeader,
  JDdocSection,
  JDrequireMark,
  InputText,
  TooltipList,
  Toast,
  toast,
  DEFAULT_PAGINATION_SETTING,
  JDatomClasses,
  arraySum,
  autoComma,
  autoHypen,
  card_space,
  dateRangeFormat,
  fromToRender,
  getFromResult,
  insideRedirect,
  JDphotoModal,
  instanceOfA,
  isEmail,
  isEmpty,
  isHaveNumber,
  isHaveScharacter,
  isIncludeSpecialChar,
  isLast,
  isLengthIn,
  isMaxOver,
  isName,
  isNumber,
  isNumberMinMax,
  isPassword,
  isPhone,
  isUrl,
  isYYYYMMDD,
  jsonString,
  muResult,
  JDfileManager,
  numberStr,
  onCompletedMessage,
  queryDataFormater,
  updateURLParameter,
  randomIntFromInterval,
  removeNullOfObject,
  removeSpecialChar,
  s4,
  getAllFromUrl,
  copytoClipboard,
  searchListFormat,
  setMidNight,
  textAlignClass,
  getFromUrl,
  toNumber,
  share,
};
