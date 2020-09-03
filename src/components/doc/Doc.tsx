import React from 'react';
import { IDiv } from '../../types/interface';

interface Iprops extends IDiv {}

const Doc: React.FC<Iprops> = props => {
	return <div {...props} className={'JDdoc ' + props.className} />;
};

const DocSection: React.FC = ({ children }) => {
	return <div className="JDdocSection">{children}</div>;
};

const DocHeader: React.FC = ({ children }) => {
	return (
		<div className="JDdocHeader">
			<h4>
				<b>
					<span className="">{children}</span>
				</b>
			</h4>
		</div>
	);
};

export { DocHeader, DocSection };
export default Doc;
