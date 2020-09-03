import React from 'react';
import { IPreloaderConfigProps } from '../components/preloader/Preloader';
export declare const PortalPreloader: ({
  loading,
  floating,
  size,
}: IPreloaderConfigProps) => React.ReactPortal;
export declare const portalElement: () => HTMLElement;
export declare const hightPortalElement: () => HTMLElement;
export default portalElement;
