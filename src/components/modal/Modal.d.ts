import React from 'react';
import ReactModal from 'react-modal';
import { IUseModal } from '../../hooks/hook';
import { IPropsModalHeadProps } from './components/ModalHeadSection';
import { TElements } from '../../types/interface';
export interface JDmodalConfigProps {
  head?: IPropsModalHeadProps;
  center?: boolean;
  loading?: boolean;
  alert?: boolean;
  foot?: TElements;
  isUnderHeader?: boolean;
  confirm?: boolean;
  children?: any;
  minWidth?: string;
  minContentsWidth?: string;
  paddingSize?: 'large';
  visibleOverflow?: boolean;
  falseMessage?: string | any[];
  trueMessage?: string | any[];
  contentClassName?: string;
  id?: string;
  fullInMobile?: boolean;
  contentWrapStyle?: React.CSSProperties;
  confirmCallBackFn?(flag: boolean, key?: string): any;
}
interface IProps extends ReactModal.Props, IUseModal, JDmodalConfigProps {}
declare const JDmodal: React.SFC<IProps>;
export default JDmodal;
declare const JDtoastModal: React.SFC<IProps>;
export { JDtoastModal };
