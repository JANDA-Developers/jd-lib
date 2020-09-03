import React from "react";
import { IUseModal } from "../../hooks/hook";
import JDmodal, { JDmodalConfigProps } from "../modal/Modal";
import JDSlider from "../slider/Slider";
import PhotoFrame from "../photoFrame/PhotoFrame";
import { Slide } from "../slider/Slider";

export type TPhotoModalInfo = {
  images: string[];
};

interface IProps extends JDmodalConfigProps {
  modalHook: IUseModal<TPhotoModalInfo>;
}

const PhotoModal: React.FC<IProps> = ({ modalHook, ...props }) => {
  const { images } = modalHook.info || { images: [] };
  return (
    <JDmodal {...modalHook} {...props}>
      <JDSlider>
        {(images || []).map((img: string) => (
          <Slide>
            <PhotoFrame src={img} />
          </Slide>
        ))}
      </JDSlider>
    </JDmodal>
  );
};

export default PhotoModal;
