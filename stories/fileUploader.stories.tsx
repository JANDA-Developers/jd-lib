import React from 'react';
import SingleUploader from '../src/components/fileUploader/SingleUploader';
import JDcontainer from '../src/components/container/Container';
import { useFilesManager } from '../src/hooks/hook';


// #  자바스크립트 파일로 변환하는법: dataURLtoFile(localFile.base64, localFile.fileName) #
export default {
	title: 'FileUploader',
	component: () => {
		const fileManageHook = useFilesManager();
		return <SingleUploader fileUploaderHook={fileManageHook} label="" />;
	},
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
