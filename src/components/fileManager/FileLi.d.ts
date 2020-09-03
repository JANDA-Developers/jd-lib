import React from "react";
import { TlocalFile } from "../../hooks/hook";
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
declare const FileLi: React.FC<IProps>;
export default FileLi;
