import React from "react";
import { IDiv } from "../../../types/interface";
interface Iprops {
    headerRgiht?: JSX.Element | JSX.Element[];
    title: string;
    desc?: string;
}
declare const CardHeader: React.FC<Iprops & IDiv>;
export default CardHeader;
