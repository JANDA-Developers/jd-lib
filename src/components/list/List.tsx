import classNames from 'classnames';
import React, { Fragment } from 'react';
import { IUl, JDatomExtentionSet } from '../../types/interface';
import { s4, textAlignClass, JDatomClasses } from '../../utils/utils';
import { TextAlign, TextSize } from '../../types/enum';

interface IProps extends IUl, JDatomExtentionSet {
	className?: string;
	border?: boolean;
	stripe?: boolean;
	withIndex?: boolean;
	contents: any[];
	align?: TextAlign;
	noWrap?: boolean;
	size?: TextSize;
	lineHeight?: number;
	linePoint?: string;
}

const JDlist: React.FC<IProps> = ({
	children,
	className,
	noWrap,
	border,
	stripe,
	withIndex,
	lineHeight = 2,
	align = 'left',
	contents,
	linePoint,
	size,
	...props
}) => {
	const classes = classNames('JDlist', className, {
		'JDlist--bordered': border,
		'JDlist--stripe': stripe,
		'JDlist--1': lineHeight === 1,
		'JDlist--2': lineHeight === 2,
		'JDlist--3': lineHeight === 3,
		'JDlist--4': lineHeight === 4,
		'JDlist--5': lineHeight === 5,
		'JDlist--6': lineHeight === 6,
		'JDlist--7': lineHeight === 7,
		'JDlist--8': lineHeight === 8,
		'JDlist--9': lineHeight === 9,
		'JDlist--whiteSpace': noWrap,
		...textAlignClass(align),
		...JDatomClasses(props)
	});

	return (
		<Fragment>
			<ul className={classes} {...props}>
				{contents.map((content, index) => (
					<li className="JDlist__li" key={s4()}>
						<Fragment>
							{linePoint ||
								(withIndex && (
									<span className="JDlist__index">
										{withIndex && index}
										{linePoint && `${linePoint}`}
									</span>
								))}
							{content}
						</Fragment>
					</li>
				))}
			</ul>
		</Fragment>
	);
};

export default JDlist;
