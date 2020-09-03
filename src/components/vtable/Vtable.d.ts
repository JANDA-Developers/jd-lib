import React from "react";
import "./Vtable.scss";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
interface IProps extends JDatomExtentionSet {
    headerRgiht?: JSX.Element | JSX.Element[];
    header?: Vheader;
    className?: string;
    border?: "none";
    mode?: "unStyle";
    cellColumn?: boolean;
    headerMode?: "bottomBorder";
    mobileReAssign?: "topLabel";
}
export declare type Vheader = {
    title: JSX.Element | string;
    desc?: JSX.Element | string;
};
declare const Vtable: React.FC<IProps>;
export declare const VtableColumn: React.FC<IDiv>;
interface IVtableCellProp {
    label: string;
}
export declare const VtableCell: React.FC<IVtableCellProp>;
declare type TData = {
    label: string;
    Component: () => JSX.Element;
};
interface IColumnCellsProps {
    datas: TData[] | TData[][];
}
export declare const ColumnCells: React.FC<IColumnCellsProps>;
export default Vtable;
