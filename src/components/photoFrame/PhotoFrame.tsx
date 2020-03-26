import React from "react";
import classNames from "classnames";
import { JDatomExtentionSet, IDiv } from "../../types/interface";
import { JDmrClass, JDmbClass } from "../../utils/autoClasses";
import { WindowSizeNumber } from "../../types/enum";

interface Iprops extends JDatomExtentionSet, IDiv {
  src?: string;
  lang?: string;
  responseImg?: boolean;
  unStyle?: boolean;
  type?: string;
  className?: string;
  isBgImg?: boolean;
  context?: any;
  windowWidth?: number;
}

// Lang should be a TShortCut
const PhotoFrame: React.FC<Iprops> = ({
  mb,
  mr,
  src: srcProp = "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png",
  type,
  unStyle,
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
      src += "--mb";
    } else {
      src += "--pc";
    }
  }

  if (lang) {
    src += `--${lang}`;
  }
  if (type) src += type;

  const classes = classNames("photoFrame", className, {
    "photoFrame--fixHeight": isBgImg,
    "photoFrame--unStyle": unStyle,
    ...JDmbClass(mb),
    ...JDmrClass(mr)
  });

  const bg = src;

  return (
    <div className={classes} {...props}>
      {isBgImg && (
        <div
          style={{
            backgroundImage: `url(${bg})`
          }}
        className="photoFrame__bgimg"
        />
      )}
      {isBgImg || <img className="photoFrame__img" src={src} />}
    </div>
  );
};

export default PhotoFrame;
