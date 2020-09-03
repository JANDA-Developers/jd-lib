import React, { useMemo } from "react";
import JDmodal, { JDmodalConfigProps } from "../modal/Modal";
import { IUseModal } from "../../hooks/hook";
import ImageManager, { ImageUploaderProps } from "./FileManager";
import Button, { IButtonProps } from "../button/Button";
import Align from "../align/Align";
import { defaultLangSet } from "./FileManager";

export type TFileManagerLangs = {
  headTitle: string;
  cancelLabel: string;
  confrimLabel: string;
  fileAddLabel: string;
  unExsistFileMessage: string;
};

interface IProps extends ImageUploaderProps {
  btnCommon?: IButtonProps;
  modalProp?: JDmodalConfigProps;
  modalHook: IUseModal;
  langs?: TFileManagerLangs;
}

const ImageManagerModal: React.FC<IProps> = ({
  modalHook,
  modalProp,
  uploaderHook,
  addBtnProps,
  btnCommon,
  langs = defaultLangSet,
}) => {
  const { setUrls, urls } = uploaderHook;

  const originalUrls = useMemo(() => urls.slice(), []);

  {
    /* 취소시 삭제되었던 이미지들 복원 처리 */
  }
  const handleCancel = () => {
    setUrls([...originalUrls]);
    modalHook.closeModal();
  };

  const { head, foot, ...modaProps } = modalProp || {
    head: undefined,
    foot: undefined,
  };

  return (
    <JDmodal
      className="filesManagerModal"
      head={{
        closeFn: () => {
          handleCancel();
        },
        title: langs.headTitle,
        ...head,
      }}
      foot={
        foot || (
          <Align
            flex={{
              between: true,
            }}
          >
            <Button
              id="ImgCompleteBtn"
              onClick={() => {
                modalHook.closeModal();
              }}
              size="small"
              padding="large"
              br="round"
              thema="primary"
              label={langs.confrimLabel}
              {...btnCommon}
            />
            <Button
              thema="grey3"
              id="ImgCancelBtn"
              onClick={() => {
                handleCancel();
              }}
              size="small"
              padding="large"
              br="round"
              mode="flat"
              label={langs.cancelLabel}
              {...btnCommon}
            />
          </Align>
        )
      }
      {...modaProps}
      {...modalHook}
    >
      <ImageManager
        addBtnProps={{ ...btnCommon, ...addBtnProps }}
        uploaderHook={uploaderHook}
      />
    </JDmodal>
  );
};

export default ImageManagerModal;
