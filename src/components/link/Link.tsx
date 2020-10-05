import React from 'react';
import JDtypho, { IJDtyphoProp } from '../typho/Typho';

export interface ILinkProp extends IJDtyphoProp {
    href?: string
}

export const JDlink: React.FC<ILinkProp> = ({ className, href, ...prop }) => {
    return <JDtypho component="span" className={`JDlink ${className}`} {...prop} >
        <a href={href}>{prop.children}</a>
    </JDtypho>;
};


export default JDlink;