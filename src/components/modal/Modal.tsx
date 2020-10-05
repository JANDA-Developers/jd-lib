import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import Button, { IButtonProps } from '../button/Button';
import { IUseModal } from '../../hooks/hook';
import ModalEndSection from './components/ModalEndSection';
import ModalHeadSection, {
  IPropsModalHeadProps,
} from './components/ModalHeadSection';
import Preloader from '../preloader/Preloader';
import { TElements } from '../../types/interface';

export type TAlertConfig = {
  falseMessage?: string;
  trueMessage?: string;
  confirmCallBackFn?(flag: boolean): any;
};

type TPannel = {
  buttons: IButtonProps[];
};

export interface JDmodalConfigProps {
  /** 헤드 와 푸터 스티키로 변경 */
  sticky?: boolean;
  /** 헤드 설정 */
  head?: IPropsModalHeadProps;
  /** 헤드 설정 */
  center?: boolean;
  /** 로딩 모드로 전환 */
  loading?: boolean;
  /** 모달을 Alert처럼 사용합니다. */
  alert?: TAlertConfig;
  /** 모달을 Confrim처럼 사용합니다. */
  confirm?: boolean;
  /** 바텀부분 엘리먼트 */
  foot?: TElements;
  /** right 만들기 */
  pannel?: TPannel;
  /** 헤더아래로 붙일지 결정 */
  isUnderHeader?: boolean;
  /** 최소 넓이 고정 */
  minWidth?: string;
  /** 콘텐츠 최소넓이 고정 */
  minContentsWidth?: string;
  /** 모바일 일때 가득찬 화면으로 전환함 */
  fullInMobile?: boolean;
  /** 패딩 사이즈 조절 */
  paddingSize?: 'large' | 'no';
  /** --- */
  visibleOverflow?: boolean;
  /** --- */
  contentClassName?: string;
  /** --- */
  contentWrapStyle?: React.CSSProperties;
}

export interface IProps
  extends ReactModal.Props,
  IUseModal,
  JDmodalConfigProps { }

export const JDmodal: React.FC<IProps> = ({
  info,
  center,
  head,
  className,
  isUnderHeader,
  isOpen,
  minContentsWidth,
  minWidth,
  closeModal,
  alert,
  children,
  confirm,
  foot,
  sticky,
  pannel,
  paddingSize,
  visibleOverflow,
  loading,
  overlayClassName: overlayClassNameProp,
  contentClassName = 'JDmodal__body',
  contentWrapStyle: contentWrapStyleProp,
  fullInMobile,
  appElement = document.getElementById('root') || undefined,
  ...props
}) => {
  if (info) {
    let inInInfo: any = {};

    if (alert) {
      const { trueMessage, falseMessage } = alert;
      if (info.trueMessage) {
        inInInfo.trueMessage = info.trueMessage || trueMessage;
      }
      if (info.falseMessage) {
        inInInfo.falseMessage = info.falseMessage || falseMessage;
      }
    }
  }

  const hanldeClickBtn = (flag: boolean) => {
    alert && alert.confirmCallBackFn?.(flag);
    closeModal();
  };

  const sharedTrueBtnProp: any = {
    thema: 'primary',
    mode: 'flat',
    onClick: () => {
      hanldeClickBtn(true);
    },
    label: alert?.trueMessage || 'confirm',
  };

  const sharedFalseBtnProp: any = {
    mode: 'flat',
    thema: 'warn',
    onClick: () => {
      hanldeClickBtn(false);
    },
    label: alert?.falseMessage || 'close',
  };

  const misClickPreventCloseModal = () => {
    closeModal();
  };

  const modalStyle = {
    minWidth: loading || minWidth,
  };

  const modalContentsStyle = {
    minWidth: minContentsWidth,
    ...contentWrapStyleProp,
  };

  const getChildren = () => (
    <Fragment>
      <div className={contentClassName} style={modalContentsStyle}>
        {children}
        {info && info.children}
        {typeof info === 'string' && info}
        {info && info.txt}
      </div>
      {pannel && (
        <div className="JDmodal__pannel">
          {pannel.buttons.map((b, i) => (
            <Button key={i} {...b} />
          ))}
        </div>
      )}
    </Fragment>
  );

  const overlayClassNames = classNames(
    'JDmodal-overlay',
    overlayClassNameProp,
    {}
  );

  const classes = classNames('Modal JDmodal', className, {
    'JDmodal--sticky': sticky,
    'JDmodal--center': center,
    'JDmodal--visibleOverflow': visibleOverflow,
    'JDmodal--alert': alert || confirm,
    'JDmodal--alertWaring': info && info.thema === 'warn',
    'JDmodal--paddingLarge': paddingSize === 'large',
    'JDmodal--paddingNo': paddingSize === 'no',
    'JDmodal--loading': loading,
    'JDmodal--fullInMobile': fullInMobile,
  });

  const innerClasses = classNames({
    JDmodal__inner: pannel,
  });

  const defualtJDmodalProps = {
    appElement: appElement,
    className: `Modal ${classes}`,
    overlayClassName: 'Overlay',
  };

  if (loading) {
    return (
      <ReactModal
        {...defualtJDmodalProps}
        {...props}
        overlayClassName={overlayClassNames}
        isOpen={true}
      >
        <Preloader loading={true} size="large" />
      </ReactModal>
    );
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={misClickPreventCloseModal}
      {...props}
      {...defualtJDmodalProps}
      // @ts-ignore
      style={{ content: { ...modalStyle } }}
      overlayClassName={overlayClassNames}
    >
      <div
        className={innerClasses}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {head && <ModalHeadSection closeFn={closeModal} {...head} />}
        {getChildren()}
        {foot && (
          <ModalEndSection className="JDmodal__foot">{foot}</ModalEndSection>
        )}
        {confirm && (
          <ModalEndSection>
            <Button {...sharedTrueBtnProp} />
            <Button {...sharedFalseBtnProp} />
          </ModalEndSection>
        )}
      </div>
    </ReactModal>
  );
};

export default JDmodal;

const JDtoastModal = JDmodal;
export { JDtoastModal };
