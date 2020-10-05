import PropTypes from 'prop-types';
import React from 'react';
import { ISpan, JDatomConfig } from '../../types/interface';
import classNames from 'classnames';
import { JDatomClasses } from '../../utils/utils';
import JDtypho from '../typho/Typho';

export interface ILabelProp extends ISpan, JDatomConfig {
	txt?: string | JSX.Element;
	require?: boolean;
}

const JDLabel: React.FC<ILabelProp> = ({ txt, className, require, children, ...props }) => {


	const classes = classNames('JDlabel', className, {
		...JDatomClasses(props)
	});


	return (
		<span className={classes} {...props}>
			{txt || children} <JDtypho component="span" color="point">{require && "*필수"}</JDtypho>
		</span>
	);
}

JDLabel.propTypes = {
	txt: PropTypes.string.isRequired
};

export default JDLabel;
