import React from 'react';
import { IDiv } from '../../types/interface';

interface Iprop extends IDiv {}

const RequireMark: React.FC<Iprop> = ({ className, ...props }) => {
	return (
		<b className={`requireMark ${className}`} {...props}>
			*
		</b>
	);
};

export default RequireMark;
