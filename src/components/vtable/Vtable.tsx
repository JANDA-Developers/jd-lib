import React, {Fragment} from "react";
import "./Vtable.scss";
import JDLabel from "../label/JDLabel";
import classNames from "classnames";
import {IDiv, JDatomExtentionSet} from "../../types/interface";
import BaseHeader from "../base/BaseHeader";

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

export type Vheader = {
  title: JSX.Element | string;
  desc?: JSX.Element | string;
};

const Vtable: React.FC<IProps> = ({
  className,
  headerMode,
  header,
  border,
  children,
  headerRgiht,
  cellColumn,
  mode,
}) => {
  const classes = classNames("vtable", className, {
    "vtable--noHeader": !header,
    "vtable--unBorder": border === "none",
    "vtable--unStyle": mode === "unStyle",
    "vtable--cellColumn": cellColumn,
  });
  const headerClasses = classNames("vtable__header", undefined, {
    "vtable__header--borderBottom": headerMode === "bottomBorder",
  });

  return (
    <div className={classes}>
      {header && (
        <BaseHeader
          titleElement={
            <h6>
              <b>{header.title}</b>
            </h6>
          }
          desc={header.desc}
          headerRgiht={headerRgiht}
          className={headerClasses}
        />
      )}
      <div className="vtable__body" children={children} />
    </div>
  );
};

export const VtableColumn: React.FC<IDiv> = ({children}) => {
  return <div className="vtable__column flex-grid-grow" children={children} />;
};

interface IVtableCellProp {
  label: string;
}

export const VtableCell: React.FC<IVtableCellProp> = ({label, children}) => (
  <div className="vtable__cell flex-grid">
    <div className="vtable__label">
      <JDLabel txt={label} />
    </div>
    <div className="vtable__content" children={children} />
  </div>
);

type TData = {
  label: string;
  Component: () => JSX.Element;
};

interface IColumnCellsProps {
  datas: TData[] | TData[][];
}

export const ColumnCells: React.FC<IColumnCellsProps> = ({datas}: any) => (
  <Fragment>
    {datas.map((d: any) => {
      if (!Array.isArray(d)) {
        const {label, Component} = d;
        return (
          <VtableColumn key={label}>
            <VtableCell label={label}>{Component()}</VtableCell>
          </VtableColumn>
        );
      } else {
        return (
          <VtableColumn key={d[0].label + d[1].label}>
            {d.map((inD: any) => {
              const {label, Component} = inD;
              return <VtableCell label={label}>{Component()}</VtableCell>;
            })}
          </VtableColumn>
        );
      }
    })}
  </Fragment>
);
export default Vtable;
