import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SingleUploader from './SingleUploader';
import JDcontainer from '../container/Container';
import { useFilesManager } from '../../hooks/hook';


// #  자바스크립트 파일로 변환하는법: dataURLtoFile(localFile.base64, localFile.fileName) #
export default {
	title: 'FileUploader',
	component: () => {
		const fileManageHook = useFilesManager();
		return <SingleUploader fileUploaderHook={fileManageHook} label="" />;
	},
	decorators: [withKnobs]
};

export const standard = () => {
	const fileManageHook = useFilesManager();
	return (
		<JDcontainer verticalPadding>
			<SingleUploader
				buttonProps={{
					label: '파일선택',
					mode: 'border'
				}}
				index={0}
				label={'파일업로드'}
				fileUploaderHook={{
					...fileManageHook,
					onChangeFile: e => fileManageHook.onChangeFile(e, 0)
				}}
			/>
			<SingleUploader
				buttonProps={{
					label: '파일선택',
					mode: 'border'
				}}
				label={'파일업로드'}
				index={1}
				fileUploaderHook={{
					...fileManageHook,
					onChangeFile: e => fileManageHook.onChangeFile(e, 1)
				}}
			/>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
