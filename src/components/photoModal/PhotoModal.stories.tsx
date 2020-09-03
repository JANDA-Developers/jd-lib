import React from "react";
import PhotoModal, { TPhotoModalInfo } from "./PhotoModal";
import JDcontainer from "../container/Container";
import { useModal } from "../../hooks/hook";
import Button from "../button/Button";

export const standard = () => {
  const modalHook = useModal<TPhotoModalInfo>();
  return (
    <JDcontainer verticalPadding>
      <Button
        label="openModal"
        onClick={() => {
          modalHook.openModal({
            images: [
              "https://jmagazine.joins.com/_data/photo/2018/07/3731660748_IMCScyo0_1.jpg",
              "https://imgnn.seoul.co.kr/img/upload/2014/01/14/SSI_20140114151740_V.JPG",
            ],
          });
        }}
      />
      <PhotoModal
        head={{
          title: "이미지 모달",
        }}
        modalHook={modalHook}
      />
    </JDcontainer>
  );
};

export default {
  title: "PhotoModal",
  component: standard,
};

standard.story = {
  name: "standard",
};
