import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import classNames from 'classnames';
import { IDiv, JDatomExtentionSet } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';

interface IProps extends ReactPaginateProps, JDatomExtentionSet {
	previousDisplay?: boolean;
	textSize?: 'large' | 'small';
	align?: 'center';
	wrapProp?: IDiv
	setPage: (foo: number) => any;
}

const JDPagination: React.FC<IProps> = ({
	previousDisplay,
	textSize,
	align,
	wrapProp,
	pageRangeDisplayed,
	marginPagesDisplayed,
	setPage,
	...props
}) => {
	const classes = classNames(wrapProp?.className, undefined, {
		'JDpagination-wrap': true,
		'JDpagination-wrap--text-large': textSize === 'large',
		'JDpagination-wrap--text-small': textSize === 'small',
		'JDpagination-wrap--align-center': align === 'center',
		'JDpagination-wrap--prev-hidden': previousDisplay === false,
		...JDatomClasses(props)
	});

	const onPageChange = ({ selected }: any) => {
		setPage(selected + 1);
	};

	return (
		<div {...wrapProp} className={classes}>
			<ReactPaginate
				onPageChange={onPageChange}
				pageRangeDisplayed={pageRangeDisplayed}
				marginPagesDisplayed={marginPagesDisplayed}
				containerClassName="JDpagination" // Ul
				pageClassName="JDpagination__li"
				activeClassName="JDpagination__li--active"
				pageLinkClassName="JDpagination__a"
				activeLinkClassName="JDpagination__a--active"
				previousClassName="JDpagination__btn-prev"
				nextClassName="JDpagination__btn-next"
				previousLinkClassName="JDpagination__btn-prev__a"
				nextLinkClassName="JDpagination__btn-next__a"
				disabledClassName="JDpagination__btn--disabled"
				extraAriaContext="extraAriaContext"
				breakClassName="JDpagination__ellipsis"
				breakLinkClassName="JDpagination__ellipsis-a"
				{...props}
			/>
		</div>
	);
};
//
export default JDPagination;
