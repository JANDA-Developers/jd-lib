import React from 'react';
import { IDiv } from '../../types/interface';

interface IBlockProp extends IDiv {
  full?: boolean;
}

export const Block = ({ style, full, ...prop }: IBlockProp) => (
  <div
    style={{
      height: '100px',
      width: full ? `calc("100%" - "20px")` : '100px',
      backgroundColor: '#ccc',
      margin: '10px',
      boxSizing: 'border-box',
      ...style,
    }}
    {...prop}
  />
);
