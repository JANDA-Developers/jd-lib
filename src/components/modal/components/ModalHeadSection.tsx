import React from 'react';
import JDIcon from '../../icons/Icons';
import JDtypho from '../../typho/Typho';
import { TElements } from '../../../types/interface';
export type IPropsModalHeadProps = {
	title?: string;
	element?: TElements;
	closeFn?: () => any;
};

const ModalHeadSection: React.FC<IPropsModalHeadProps> = ({ title, element, closeFn }) => {
	return (
		<div className="JDmodal__head">
			{title && (
				<JDtypho size="h6" mb="no">
					{title}
				</JDtypho>
			)}
			{element && <div>{element}</div>}
			<JDIcon
				hover
				onClick={() => {
					closeFn && closeFn();
				}}
				className="JDmodal__closeIcon"
				icon="close"
			/>
		</div>
	);
};

export default ModalHeadSection;
