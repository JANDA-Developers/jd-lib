import React from "react";
import { TextSize, JDColor } from "../../types/enum";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
interface IProps extends IDiv, JDatomExtentionSet {
    size?: TextSize;
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    decoration?: "bar";
    color?: JDColor;
    hover?: boolean;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}
declare const JDtypho: React.FC<IProps>;
export default JDtypho;
