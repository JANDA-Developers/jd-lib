import React from 'react';
import classnames from 'classnames';
import { JDColor } from '../../types/enum';
import { s4 } from '../../utils/utils';
import JDToolTip from '../tooltip/Tooltip';
import JDicon, { ICONPROP } from '../icons/Icons';
import { TElements, JDatomExtentionSet } from '../../types/interface';
import { JDatomClasses, bgColorClass, textColorClass } from '../../utils/autoClasses';

export interface IJDbadge
  extends React.HTMLAttributes<HTMLSpanElement>,
  JDatomExtentionSet {
  size?: 'noraml' | 'small' | 'tiny' | 'large';
  thema?: JDColor;
  hover?: boolean;
  label?: TElements;
  mode?: 'folded' | 'border';
  iconProp?: ICONPROP;
  className?: string;
  children?: any;
  tooltip?: TElements;
  round?: boolean;
}

export const JDbadge: React.FC<IJDbadge> = ({
  className,
  hover,
  tooltip,
  label,
  size,
  thema,
  children,
  mode,
  round,
  iconProp,
  ...props
}) => {
  const colorTheme = mode !== "border" ? bgColorClass(thema) : textColorClass(thema);
  const classNames = classnames('JDbadge', className, {
    'JDbadge--large': size === 'large',
    'JDbadge--tiny': size === 'tiny',
    'JDbadge--small': size === 'small',
    'JDbadge--hover': hover,
    'JDbadge--fold': mode === "folded",
    'JDbadge--border': mode === "border",
    'JDbadge--round': round,
    ...JDatomClasses(props),
    ...colorTheme,
  });

  const newId = s4();

  return (
    <span
      data-tip={tooltip ? true : undefined}
      data-for={tooltip ? `badgeTooltip${newId}` : undefined}
      className={classNames}
      {...props}
    >
      {label}
      {children}
      {tooltip && (
        <JDToolTip type="dark" effect="solid" id={`badgeTooltip${newId}`}>
          <span>{tooltip}</span>
        </JDToolTip>
      )}
      {iconProp && <JDicon {...iconProp} />}
    </span>
  );
};

export default JDbadge;
