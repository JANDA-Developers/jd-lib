import React, { ChangeEvent } from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
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
declare const ImgViewer: React.FC<IProps>;
export default ImgViewer;
