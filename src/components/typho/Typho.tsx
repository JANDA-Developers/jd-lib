import React from 'react';
import { TextSize, JDColor } from '../../types/enum';
import classNames from 'classnames';
import { textSizeClass, textColorClass, JDatomClasses } from '../../utils/autoClasses';
import { IJDalignProp } from "../align/Align"
import JDalign from "../align/Align";

export interface IJDtyphoProp extends IJDalignProp {
	size?: TextSize;
	component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
	decoration?: 'bar';
	color?: JDColor;
	hover?: boolean;
	weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

const JDtypho: React.FC<IJDtyphoProp> = ({
	component,
	decoration,
	size,
	className,
	children,
	color,
	weight,
	mb,
	mr,
	hide,
	hover,
	style,
	...props
}) => {
	const classes = classNames('JDtypho', className, {
		'JDtypho--hover': hover,
		'JDtypho-deco--bar': decoration === 'bar',
		...textSizeClass(size),
		...textColorClass(color),
		...JDatomClasses({
			hide,
			mb,
			mr
		})
	});

	const commonProps = {
		className: classes,
		style: {
			fontWeight: weight,
			...style
		},
		...props
	};

	if (component) {
		if (component === 'span') return <span {...commonProps}>{children}</span>;
		if (component === 'h6') return <h6 {...commonProps}>{children}</h6>;
		if (component === 'h5') return <h5 {...commonProps}>{children}</h5>;
		if (component === 'h4') return <h4 {...commonProps}>{children}</h4>;
		if (component === 'h3') return <h3 {...commonProps}>{children}</h3>;
		if (component === 'h2') return <h2 {...commonProps}>{children}</h2>;
		if (component === 'h1') return <h1 {...commonProps}>{children}</h1>;
	}

	return <JDalign {...commonProps}>{children}</JDalign>;
};

export default JDtypho;
