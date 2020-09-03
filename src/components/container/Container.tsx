import React from 'react';
import { IDiv } from '../../types/interface';
import { WindowSize } from '../../types/enum';
import classNames from 'classnames';

export interface IProps extends IDiv {
  /** 콘테이너 사이즈*/
  size?: WindowSize;
  /** 세로 패딩*/
  verticalPadding?: 'normal' | 'small' | boolean;
}

export const JDcontainer: React.FC<IProps> = ({
  className,
  size,
  verticalPadding,
  ...prop
}) => {
  const classes = classNames('container', className, {
    'container--full': size === WindowSize.full,
    'container--sm': size === WindowSize.sm,
    'container--md': size === WindowSize.md,
    'container--lg': size === WindowSize.lg,
    'container--vps': verticalPadding === 'normal' || verticalPadding === true,
    'container--vpSmall': verticalPadding === 'small',
  });

  return <div className={classes} {...prop} />;
};

export default JDcontainer;
