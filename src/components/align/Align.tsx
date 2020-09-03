import React from 'react';
import { IDiv, JDatomExtentionSet } from '../../types/interface';
import { JDatomClasses, textAlignClass } from '../../utils/autoClasses';
// @ts-ignore
import classNames from 'classnames';
import { TextAlign } from '../../types/enum';

type TFlex = {
  center?: boolean;
  vCenter?: boolean;
  between?: boolean;
  around?: boolean;
  wrap?: boolean;
  end?: boolean;
  column?: boolean;
  oneone?: boolean;
  grow?: boolean;
};

type TCol = {
  wlg?: number;
  lg?: number;
  md?: number;
  sm?: number;
  full?: number;
  flex?: boolean;
};

type TGrid = {
  grow?: boolean;
};

export interface IJDalignProp extends IDiv, JDatomExtentionSet {
  text?: TextAlign;
  flex?: TFlex | true;
  grid?: TGrid | true;
  col?: TCol | true;
}

export const Align: React.FC<IJDalignProp> = ({
  flex,
  className,
  children,
  grid,
  col,
  text,
  hide,
  mb,
  mr,
  ...props
}) => {
  let colString = '';
  if (col) {
    if (typeof col === 'object') {
      if (col.full) colString += `col--full-${col.full} `;
      if (col.lg) colString += `col--lg-${col.lg} `;
      if (col.md) colString += `col--md-${col.md} `;
      if (col.sm) colString += `col--sm-${col.sm} `;
      if (col.wlg) colString += `col--wlg-${col.wlg} `;
      if (col.flex) colString += 'JDflex--float ';
    }
  }

  let classes = classNames('JDAlign', className, {
    JDflex: flex,
    'flex-grid__col': col,
    ...textAlignClass(text),
    ...JDatomClasses({
      hide,
      mb,
      mr,
    }),
  });

  if (typeof flex === 'object') {
    classes = classNames('', classes, {
      'JDflex--end': flex?.end,
      'JDflex--between': flex?.between,
      'JDflex--center': flex?.center,
      'JDflex--vCenter': flex?.vCenter,
      'JDflex--column': flex?.column,
      'JDflex--wrap': flex?.wrap,
      'JDflex--oneone': flex?.oneone,
      'JDflex--grow': flex?.grow,
    });
  }

  if (grid) {
    classes = classNames('', classes, {
      'flex-grid-grow': typeof grid === 'object' && grid.grow,
      'flex-grid': grid === true,
    });
  }

  return (
    <div className={classes + ' ' + colString} {...props}>
      {children}
    </div>
  );
};

export default Align;
