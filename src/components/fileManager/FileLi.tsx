import React from "react";
import Align from "../align/Align";
import JDIcon from "../icons/Icons";
import { TlocalFile } from "../../hooks/hook";
import classNames from "classnames";
import { TFileManagerLangs } from "./FileManagerModal";
export interface IProps {
  file?: TlocalFile;
  url?: string;
  isUrl?: boolean;
  isSkelton?: boolean;
  fileContext: {
    handleSelect: (file: string | TlocalFile | null) => void;
    deleteUrl: (deleteUrl: string[]) => void;
    selectFile: string | TlocalFile | null;
    deletelocalFile: (deleteKey: string[]) => void;
    langs: TFileManagerLangs;
  };
}

const FileLi: React.FC<IProps> = ({
  file,
  url,
  isUrl,
  isSkelton,
  fileContext,
}) => {
  const {
    deleteUrl,
    handleSelect,
    selectFile,
    deletelocalFile,
    langs,
  } = fileContext;
  const isSelected = (file || url) === selectFile;

  const classes = classNames("filesManager__urlBox", undefined, {
    "filesManager__urlBox--skelton": isSkelton,
    "filesManager__urlBox--selected": !isSkelton && isSelected,
    "filesManager__urlBox--localFile": !isSkelton && !isUrl,
  });

  const isFile = file && !file.mimeType.includes("image");
  const urlFileName = decodeURIComponent(url?.split("/").reverse()[0] || "");

  if (isSkelton) {
    return (
      <Align
        key={file?.key || url}
        className={classes}
        mb="small"
        flex={{
          vCenter: true,
          between: true,
        }}
        onClick={() => {
          handleSelect(url || file!);
        }}
      >
        {langs.unExsistFileMessage}
      </Align>
    );
  }

  return (
    <Align
      key={file?.key || url}
      className={classes}
      mb="small"
      flex={{
        vCenter: true,
        between: true,
      }}
      onClick={() => {
        handleSelect(url || file!);
      }}
    >
      <Align
        className="filesManager__url"
        flex={{
          vCenter: true,
        }}
      >
        <JDIcon mr="small" icon={isFile ? "file" : "photoFile"} />
        {file?.fileName || urlFileName}
      </Align>
      <JDIcon
        onClick={() => {
          isUrl ? deleteUrl([url!]) : deletelocalFile([file!.key]);
        }}
        icon={"trashCan"}
      />
    </Align>
  );
};

export default FileLi;
