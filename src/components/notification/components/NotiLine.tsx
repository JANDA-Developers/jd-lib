import React from 'react';
import { JDalign } from '../../..';
import { JDicon } from '../../icons/Icons';
import JDtypho from '../../typho/Typho';
import moment from "moment";
import { TElements } from '../../../types/interface';

export interface INotiLineProp {
    title: TElements;
    date: Date;
    desc?: string;
    key?: string;
}

export const NotiLine: React.FC<INotiLineProp> = ({ date, title, desc }) => {

    let text = moment(date).format("YYYY-MM-DD");
    const timeDiff = Math.abs(moment(date).diff(new Date(), "h"));
    const dateDiff = Math.abs(moment(date).diff(new Date(), "d")) < 1;

    if (dateDiff) {
        text = `${timeDiff}시간 전`;
    }

    return <JDalign flex={{
        vCenter: true,
        between: true
    }} className="JDnotiLine">
        <JDalign flex={{
            vCenter: true
        }}>
            <JDicon mr="normal" tooltip={desc} size="large" icon="addCircle" />
            <JDtypho mr="normal" size="small" weight={600}>
                {title}
            </JDtypho>
        </JDalign>
        <JDtypho size="tiny">{text}</JDtypho>
    </JDalign>;
};
