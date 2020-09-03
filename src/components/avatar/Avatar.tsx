import classNames from "classnames";
import React, { Fragment } from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { IconSize } from "../../types/enum";
import { iconSizeClass, JDatomClasses } from "../../utils/autoClasses";
import JDIcon from "../icons/Icons";
import $ from "jquery";
import { IuseFilesManager } from "../../hooks/hook";
import { s4 } from "../../utils/utils";
import { IMG_REPO } from "../../types/const";
import JDsingleUploader from "../fileUploader/SingleUploader"

const DEFAULT_IMG = IMG_REPO + "default/default_profile.jpg";

export interface Iprops extends IDiv, JDatomExtentionSet {
  /** 이미지 URL*/
  img?: string;
  /** 사이즈*/
  size?: IconSize;
  /** 모드 edit 는 파일 업로드 같이 가능*/
  mode?: "edit" | "view";
  isError?: boolean;
  uploader?: IuseFilesManager;
}

export const Avatar: React.FC<Iprops> = ({
  img,
  className,
  mode = "view",
  size,
  isError,
  uploader,
  mb,
  mr,
  ...props
}) => {
  if (!uploader && mode === "edit") {
    console.warn("JDAvatar:: you should provide uploaderHOok");
  }

  const uplaoderId = s4();

  const classes = classNames("avatar JDwaves-effect", className, {
    "avatar--error": isError,
    "avatar--edit": mode === "edit",
    ...iconSizeClass("avatar", size),
    ...JDatomClasses(props),
  });

  const localImg = uploader?.localFiles[0]?.base64;
  const urlImg = img;
  const profileImg = localImg || urlImg || DEFAULT_IMG;

  const circleSize = parseFloat(size || "1em") * 2 + "em";

  const profileStyle = {
    width: circleSize,
    height: circleSize,
    backgroundImage: `url(${profileImg})`,
  };

  const CameraIcon = (
    <span
      onClick={() => {
        $(`#${uplaoderId} .JDbtn`).click();
      }}
      className="avatar__addIcon"
    >
      <span className="avatar__addIcon-inner">
        <JDIcon size="tiny" icon="camera" />
      </span>
    </span>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes}
      style={profileStyle}
      {...props}
    >
      {mode === "edit" && (
        <Fragment>
          {CameraIcon}
          {uploader && (
            <div
              id={uplaoderId}
              style={{
                overflow: "hidden",
                opacity: 0,
                width: "1px",
                height: "1px",
              }}
            >
              <JDsingleUploader fileUploaderHook={uploader} />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Avatar;
