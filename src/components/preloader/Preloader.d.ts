import React from "react";
export declare type PreloaderSize = "large" | "tiny" | "medium" | "small";
export interface IPreloaderConfigProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    page?: boolean;
    size?: PreloaderSize;
    loading?: boolean;
    position?: "center";
    floating?: boolean;
    noAnimation?: boolean;
    wrapClassName?: string;
}
declare const _default: React.NamedExoticComponent<IPreloaderConfigProps>;
export default _default;
