import React from "react";
import { IDiv } from "../../types/interface";
import { WindowSize } from "../../types/enum";
interface IProps extends IDiv {
    size?: WindowSize;
    /**
     * Value to display, either empty (" ") or "X" / "O".
     *
     * @default false*/
    verticalPadding?: "normal" | "small" | boolean;
}
export declare const JDcontainer: React.FC<IProps>;
export default JDcontainer;
