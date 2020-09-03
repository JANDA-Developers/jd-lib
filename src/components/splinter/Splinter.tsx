import React from 'react';
import { TMarginSize, JDColor, TextSize } from '../../types/enum';
import classNames from 'classnames';
import { JDatomClasses } from '../../utils/autoClasses';
import { JDatomExtentionSet } from '../../types/interface';

interface IProps extends JDatomExtentionSet {
	size?: TMarginSize;
	color?: JDColor;
	textSize?: TextSize;
}

const Splinter: React.FC<IProps> = ({ size, children = '|', color, ...props }) => {
	const classes = classNames('splinter', undefined, {
		'splinter--huge': size === 'huge',
		'splinter--small': size === 'small',
		'splinter--tiny': size === 'tiny',
		...JDatomClasses(props)
	});

	return <span className={classes}>{children}</span>;
};

export default Splinter;
