import OutReactTooltip, { TooltipProps } from 'react-tooltip';
import React from 'react';
import classNames from 'classnames';

interface IProps extends TooltipProps {

	children?: string | JSX.Element;
}

const JDToolTip: React.FC<IProps> = ({ children, className, ...props }) => {

	const classes = classNames('JDtooltip', className, {
	});

	return (
		<OutReactTooltip class={classes} {...props}>
			{children}
		</OutReactTooltip>
	);
}

export default JDToolTip;
export const ReactTooltip = OutReactTooltip;

//
