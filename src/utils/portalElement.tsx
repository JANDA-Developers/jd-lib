import React from "react";
import { createPortal } from "react-dom";
import Preloader, {
  IPreloaderConfigProps
} from "../components/preloader/Preloader";

//  2019-11-04:: 모든 floating프리로더를 포탈로 변경합니다.
// 현재 - 좌측하단에 작은 프리로더 일경우
export const PortalPreloader = ({
  loading,
  floating = true,
  size = "large"
}: IPreloaderConfigProps) =>
  createPortal(
    <Preloader size={size} floating={floating} loading={loading} />,
    portalElement()
  );
//
export const portalElement = () =>
  document.getElementById("JDpreloaderPortal")!;
export const hightPortalElement = () =>
  document.getElementById("JDpriorityPortal")!;

export default portalElement;
