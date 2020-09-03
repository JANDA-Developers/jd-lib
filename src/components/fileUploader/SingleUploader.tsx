import React, { useRef } from "react";
import { InputText, IInputTextCutsomProp } from "../InputText/InputText";
import Button, { IButtonProps } from "../button/Button";
import Align from "../align/Align";
import classNames from "classnames";
import { IuseFilesManager } from "../../hooks/hook";
import JDlabel, { ILabelProp } from "../label/JDLabel";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import { JDmbClass, JDmrClass } from "../../utils/autoClasses";

export interface IProps extends IDiv, JDatomExtentionSet {
  labelProp?: ILabelProp;
  fileUploaderHook: IuseFilesManager;
  buttonProps?: IButtonProps;
  inputProps?: IInputTextCutsomProp;
  // 하나의 파일 메니저 훅에 
  // 여러개의 업로더를 연결한 경우
  // 인덱스를 넣어서 해당 파일의 인덱스를 찾아주어야합니다. 
  // DEFAULT = 0;
  index?: number;
}

export const FileUploader: React.FC<IProps> = ({
  labelProp,
  fileUploaderHook,
  buttonProps,
  index,
  inputProps,
  className,
  mb,
  mr
}) => {
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
      <Align flex={{}}>
        <input
          style={{
            position: "absolute",
            opacity: 0,
            width: "1px",
            height: "1px"
          }}
          className="JDsingleUploader__input"
          type="file"
          onChange={onChangeFile}
          ref={uploaderRef}
        />
        <InputText mb="no" value={file?.fileName} {...inputProps} />
        <Button onClick={handleBtnClick} {...buttonProps} />
      </Align>
    </div>
  );
};

export default FileUploader;
