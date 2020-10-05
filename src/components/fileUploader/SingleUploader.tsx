import React, { useRef } from "react";
import Button, { IButtonProps } from "../button/Button";
import { IInputTextCutsomProp } from "../InputText/InputText";
import Align from "../align/Align";
import classNames from "classnames";
import { IuseFilesManager } from "../../hooks/hook";
import JDlabel, { ILabelProp } from "../label/JDLabel";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { JDmbClass, JDmrClass } from "../../utils/autoClasses";

export interface IProps extends IDiv, JDatomExtentionSet {
  labelProp?: ILabelProp;
  inputProp?: IInputTextCutsomProp;
  fileUploaderHook: IuseFilesManager;
  buttonProps?: IButtonProps;
  // 하나의 파일 메니저 훅에 
  // 여러개의 업로더를 연결한 경우
  // 인덱스를 넣어서 해당 파일의 인덱스를 찾아주어야합니다. 
  // DEFAULT = 0;
  index?: number;
}

const default_btnProp: IButtonProps = {
  label: "파일 선택",
  thema: "black",
  mode: 'flat',
  size: "small",
  br: "square"
}

export const FileUploader: React.FC<IProps> = ({
  labelProp,
  fileUploaderHook,
  buttonProps,
  index,
  className,
  inputProp,
  mb,
  mr
}) => {
  const BtnProp = {
    ...default_btnProp,
    ...buttonProps
  }
  const { localFiles, onChangeFile } = fileUploaderHook;
  const file = localFiles[index || 0];
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleBtnClick = () => {
    uploaderRef?.current?.click();
  };

  const classes = classNames("JDsingleUploader", className, {
    ...JDmbClass(mb),
    ...JDmrClass(mr)
  });

  return (
    <div className={classes}>
      {labelProp && <JDlabel {...labelProp} />}
      <Align mb="normal" flex={{
        vCenter: true
      }}>
        <input
          style={{
            position: "absolute",
            opacity: 0,
            width: "1px",
            height: "1px"
          }}
          {...inputProp}
          className={"JDsingleUploader__input" + " " + inputProp?.className}
          type="file"
          onChange={onChangeFile}
          ref={uploaderRef}
        />
        <Button mb="no" onClick={handleBtnClick} {...BtnProp} />
        <JDlabel txt={file?.fileName || "선택된 파일없음"} mb="no">
        </JDlabel>
      </Align>
    </div >
  );
};

export default FileUploader;
