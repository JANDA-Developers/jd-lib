import React, { Fragment, useRef, ChangeEvent } from "react";
import { JDmbClass, JDmrClass } from "../../utils/autoClasses";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import JDLabel from "../label/JDLabel";
import Preloader from "../preloader/Preloader";
import classnames from "classnames";
import { s4 } from "../../utils/utils";

const FILE_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgwZFJ7m2AzVe95PD2yra_4VpLvf7JvIUDRLikQ_-Zs0D0eAAX&usqp=CAU";

interface IProps extends JDatomExtentionSet, IDiv {
  minHeight?: string;
  height?: string;
  className?: any;
  coverImg?: boolean;
  canUploadImg?: boolean;
  autoHeight?: boolean;
  label?: string;
  onChangeFile?: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  source?: string;
  loading?: boolean;
  uploaderRef?: React.RefObject<HTMLInputElement>;
  error?: boolean;
}

const ImgViewer: React.FC<IProps> = ({
  loading,
  error,
  coverImg,
  mb,
  mr,
  minHeight,
  height,
  source,
  canUploadImg = true,
  onChangeFile,
  label,
  uploaderRef,
  className,
}) => {
  const imgViewerRef = useRef<HTMLDivElement>(null);

  const classes = classnames("imgViewer", className, {
    "imgViewer--error": error,
    "imgViewer--loading": loading,
    "imgViewer--coverImg": coverImg,
    ...JDmbClass(mb),
    ...JDmrClass(mr),
  });

  const isImgUrl = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  const isImageBase64 = (source: string) => {
    return source.includes("image");
  };

  const randomKey = s4();
  const isImg = source && (isImgUrl || isImageBase64);
  const noImg = !loading && !source;
  const bgImg = noImg
    ? undefined
    : isImg
    ? `url(${source})`
    : `url(${FILE_IMG})`;

  const imageStyle = {
    minHeight,
    backgroundImage: bgImg,
  };

  const imgViewerStyle = {
    height,
    minHeight,
  };
  const imgViewer_loading_style = {
    backgroundImage: "none",
    minHeight,
  };

  return (
    <Fragment>
      {label && <JDLabel txt={label} />}
      <div
        ref={imgViewerRef}
        className={classes}
        style={noImg ? imgViewerStyle : imgViewer_loading_style}
      >
        {canUploadImg && (
          <input
            ref={uploaderRef}
            tabIndex={-1}
            className="imgViewer__input"
            onChange={onChangeFile}
            id="photo"
            type="file"
            accept="image/*"
          />
        )}
        <div className="imgViewer__image-wrap">
          <div className="imgViewer__image" style={imageStyle} />
        </div>
        {/* 아래 이미지는 이미지 크기를 재는 용도로만 사용됨 */}
        <img
          style={{
            visibility: "hidden",
            opacity: 0,
            position: "absolute",
          }}
          id={`file${randomKey}`}
          src={isImg ? source : FILE_IMG}
        />
        <Preloader size="large" noAnimation loading={loading} />
      </div>
    </Fragment>
  );
};

export default ImgViewer;
