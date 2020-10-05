/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import { textColorClass, JDatomClasses } from '../../utils/autoClasses';
import s4 from '../../utils/keyGen';
import Tooltip from '../tooltip/Tooltip';
import { iconSizeClass } from '../../utils/autoClasses';
import { IIcons, IconConifgProps, IConOrigin } from './declation';
import { JDatomExtentionSet } from '../../types/interface';
import JDbadge from '../badge/Badge';

export interface IConProps
  extends React.HTMLAttributes<HTMLOrSVGElement>,
  JDatomExtentionSet {
  /** 아이콘 명세*/
  icon: IIcons;
  /** X*/
  tooltipProp?: any;
}

export type ICONPROP = IConProps & IconConifgProps;

export const JDicon: React.FC<ICONPROP> = ({
  label,
  icon,
  onClick,
  size = undefined,
  tooltip,
  color,
  labelSize,
  className,
  selected,
  badge,
  tooltipProp,
  hover,
  ...props
}) => {
  const wrapClasses = classNames('iconWrapper', className, {
    ...JDatomClasses({ hover, ...props }),
  });

  const classes = classNames('JDicon', undefined, {
    JDicon__svg: true,
    'JDicon__svg--selected': selected,
    'JDhover': hover,
    ...textColorClass(color),
    ...iconSizeClass('JDicon', size),
  });

  const newId = s4();

  if (!IConOrigin[icon]) {
    console.error(`icon ${icon} is not exist on IConOrigin`);
    return <span />;
  }

  return (
    <span
      {...tooltipProp}
      onClick={onClick}
      data-tip={tooltip ? true : false}
      data-for={tooltip && `btnTooltip${newId}`}
      className={wrapClasses}
    >
      {IConOrigin[icon]({
        className: classes,
        ...props,
      })}
      {tooltip && (
        <Tooltip
          wrapper="div"
          type="dark"
          effect="solid"
          id={`btnTooltip${newId}`}
        >
          <span
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            {tooltip}
          </span>
        </Tooltip>
      )}
      {badge && <JDbadge className="JDicon__badge" size="small" thema="error" round >{badge}</JDbadge>}
      {label && (
        <span
          className={`Icon__label ${labelSize === 'large' &&
            'Icon__label--large'}`}
        >
          {label}
        </span>
      )}
    </span>
  );
};

const JDIcon = React.memo(JDicon);
export default JDIcon;
