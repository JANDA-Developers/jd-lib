import PropTypes from 'prop-types';
import React from 'react';
import { ISpan, JDatomConfig } from '../../types/interface';
import classNames from 'classnames';
import { JDatomClasses } from '../../utils/utils';

export interface ILabelProp extends ISpan, JDatomConfig {
	txt: string | JSX.Element;
	require?: boolean;
}

const JDLabel = ({ txt, className, require, ...props }: ILabelProp) => {


	const classes = classNames('JDlabel', className, {
		...JDatomClasses(props)
	});


	return (
		<span className={classes} {...props}>
			{txt} {require && "*"}
		</span>
	);
}

JDLabel.propTypes = {
	txt: PropTypes.string.isRequired
};

export default JDLabel;
