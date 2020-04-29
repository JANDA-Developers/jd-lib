import React from 'react';
import classnames from 'classnames';
import { JDColor } from '../../types/enum';
import { colorClass, s4 } from '../../utils/utils';
import JDToolTip from '../tooltip/Tooltip';
import { TElements } from '../../types/interface';

export interface IJDbadge extends React.HTMLAttributes<HTMLSpanElement> {
	badgeSize?: 'noraml' | 'tiny';
	thema?: JDColor;
	hover?: boolean;
	className?: string;
	children?: any;
	tooltip?: TElements;
}

const JDbadge: React.SFC<IJDbadge> = ({ className, hover, tooltip, badgeSize, thema, children, ...props }) => {
	const classNames = classnames('JDbadge', className, {
		'JDbadge--tiny': badgeSize === 'tiny',
		'JDbadge--hover': hover,
		...colorClass('JDbadge', thema)
	});

	const newId = s4();

	return (
		<span
			data-tip={tooltip ? true : undefined}
			data-for={tooltip ? `badgeTooltip${newId}` : undefined}
			className={classNames}
			{...props}
		>
			{children}
			{tooltip && (
				<JDToolTip type="dark" effect="solid" id={`badgeTooltip${newId}`}>
					<span>{tooltip}</span>
				</JDToolTip>
			)}
		</span>
	);
};

export default JDbadge;
