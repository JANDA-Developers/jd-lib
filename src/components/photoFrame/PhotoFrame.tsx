import React from 'react';
import classNames from 'classnames';
import { JDatomExtentionSet, IDiv } from '../../types/interface';
import { JDmrClass, JDmbClass } from '../../utils/autoClasses';
import { WindowSizeNumber } from '../../types/enum';

export interface Iprops extends JDatomExtentionSet, IDiv {
  /** 소스 */
  src?: string;
  /** 언어 소스에서 명명법을 이용해 참조 */
  lang?: string;
  /** 반응형 소스에서 명명법을 이용해 참조 */
  responseImg?: boolean;
  /** 프레임 스타일을 제거 */
  unStyle?: boolean;
  type?: string;
  /** 백그라운드 이미지로 변경 */
  isBgImg?: boolean;
  context?: any;
  windowWidth?: number;
}

// Lang should be a TShortCut
export const PhotoFrame: React.FC<Iprops> = ({
  mb,
  mr,
  src: srcProp = 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png',
  type,
  unStyle = true,
  lang,
  context,
  className,
  responseImg,
  isBgImg,
  windowWidth = window.innerWidth,
  ...props
}) => {
  let src = srcProp;

  const sideIsOpen = context?.sideNavIsOpen;

  // "mb" || "pc"
  if (responseImg) {
    const changePoint = sideIsOpen
      ? WindowSizeNumber.DESKTOP
      : WindowSizeNumber.TABLET;

    if (windowWidth < changePoint) {
      src += '--mb';
    } else {
      src += '--pc';
    }
  }

  if (lang) {
    src += `--${lang}`;
  }
  if (type) src += type;

  const classes = classNames('photoFrame', className, {
    'photoFrame--fixHeight': isBgImg,
    'photoFrame--unStyle': unStyle,
    ...JDmbClass(mb),
    ...JDmrClass(mr),
  });

  const bg = src;

  return (
    <div className={classes} {...props}>
      {isBgImg && (
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="photoFrame__bgimg"
        />
      )}
      {isBgImg || <img className="photoFrame__img" src={src} />}
    </div>
  );
};

export default PhotoFrame;
