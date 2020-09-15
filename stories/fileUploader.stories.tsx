import React from 'react';
import SingleUploader, {
  FileUploader as JDfileUploader,
  IProps,
} from '../src/components/fileUploader/SingleUploader';
import JDcontainer from '../src/components/container/Container';
import { useFilesManager } from '../src/hooks/hook';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';

// #  자바스크립트 파일로 변환하는법: dataURLtoFile(localFile.base64, localFile.fileName) #
export default {
  title: '응용/FileUploader',
  component: JDfileUploader,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>fileUploader</Title>
          <Description>
            {`
			  파일 매니저는 파일을 바이너리 형태로 핸들링 하도록 도와줍니다.
			  <code>useFilesManager</code> 를 통해 핸들링하세요

			  주요기능
			  - 이미지 자르기 및 해상도조잘`}
          </Description>
          <Primary />
          <Stories />
          <ArgsTable of={JDfileUploader} />
        </>
      ),
    },
  },
};

export const Standard = () => {
  const fileManageHook = useFilesManager();
  return (
    <JDcontainer id="root" verticalPadding>
      <div>
        <SingleUploader
          buttonProps={{
            label: '파일선택',
            thema: 'primary',
          }}
          index={0}
          fileUploaderHook={{
            ...fileManageHook,
            onChangeFile: e => fileManageHook.onChangeFile(e, 0),
          }}
        />
      </div>
      <SingleUploader
        buttonProps={{
          label: '파일선택',
          mode: 'border',
        }}
        index={1}
        fileUploaderHook={{
          ...fileManageHook,
          onChangeFile: e => fileManageHook.onChangeFile(e, 1),
        }}
      />
    </JDcontainer>
  );
};
