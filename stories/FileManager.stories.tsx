import React from 'react';
import FileManageModal from '../src/components/fileManager/FileManagerModal';
import { useFilesManager, useModal } from '../src/hooks/hook';
import JDbutton from '../src/components/button/Button';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs/blocks';
import { JDcontainer } from '../src';

export const Standard = () => {
  const fileManageHook = useFilesManager(
    [
      'https://item.kakaocdn.net/do/ae897b8fe81a9cf7bcbe9af58d473755f43ad912ad8dd55b04db6a64cddaf76d',
    ],
    'MyFileManager'
  );
  const modalHook = useModal(true);
  return (
    <div>
      <JDbutton onClick={modalHook.openModal} />
      <FileManageModal uploaderHook={fileManageHook} modalHook={modalHook} />
    </div>
  );
};

export default {
  title: '응용/FileManager',
  component: Standard,
  decorators: [
    (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>FileManager</Title>
          <Description>
            FileManager는 사진 정보를 저장하는데 유용한 컴포넌트입니다. 사용자의
            Session Storage에 이미지를 바이너리 형태로 저장. 이미지가 리모트
            저장소로 올라갈떄까지 보관합니다.
          </Description>
          <Primary />
          <ArgsTable of={FileManageModal} />
        </>
      ),
    },
  },
};
