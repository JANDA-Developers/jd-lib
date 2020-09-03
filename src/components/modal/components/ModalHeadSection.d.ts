import React from 'react';
import { TElements } from '../../../types/interface';
export declare type IPropsModalHeadProps = {
    title?: string;
    element?: TElements;
    closeFn?: () => any;
};
declare const ModalHeadSection: React.FC<IPropsModalHeadProps>;
export default ModalHeadSection;
