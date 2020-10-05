import React from 'react';
import { JDicon } from '../icons/Icons';
import { DropDown } from "../dropDown/DropDown";
import { TUseInput, useDropDown, TOffset } from '../../hooks/hook';
import { NotiLine, INotiLineProp } from './components/NotiLine';
import { IconConifgProps } from '../icons/declation';
import { JDtabs, Tab, TabList, TabPanel } from '../tabs/Tabs';
import { InputText } from '../InputText/InputText';
import Preloader from '../preloader/Preloader';

export type TtabData = {
    name: string;
    data: INotiLineProp[];
}

export interface INotiProp {
    iconProp?: IconConifgProps;
    notiLines?: INotiLineProp[];
    loading?: boolean;
    searchHook?: TUseInput;
    offset?: TOffset;
    tabs?: TtabData[]
    unReadCount?: number;
}

export const Noti: React.FC<INotiProp> = ({ iconProp, notiLines, searchHook, tabs, loading, offset, unReadCount }) => {
    // TODO 이 컴포넌트 확장해서 만들기
    const dropDown = useDropDown();

    return <span className="JDnoti" style={{
        position: "relative"
    }}>

        <JDicon badge={unReadCount ? `${unReadCount}` : undefined} hover icon="bell2" {...iconProp} onClick={(e) => {
            e.cancelable = true;
            e.persist();
            e.stopPropagation()
            dropDown.open(undefined, offset || {
                top: "1.5rem",
                right: 0,
            })
        }} />
        <DropDown closeOnWindowClick className="JDnoti__dropBox" position={"absolute"} head={{
            title: "알림"
        }} {...dropDown}  >
            <>
                <Preloader center style={{
                    padding: "1rem"
                }} loading={loading} size="large" />
                {tabs ? <JDtabs size="small">
                    <TabList className="JDnoti__tabListWrap">
                        {tabs.map((t, i) => (<Tab key={`NotiTab${i}`}>
                            미확인 알림
                        </Tab>
                        ))}
                    </TabList>
                    {searchHook && <InputText {...searchHook} wrapClassName="JDnoti__search" mb="no" mr="no" Size="small" icon="search2" />}
                    {tabs.map((tab, i) => <TabPanel key={`NotiTabPanel${i}`}>
                        <div className="JDnoti__ul">
                            {tab.data.map((noti, i) => <NotiLine key={noti.key || `NotiLi${i}`} {...noti} />)}
                        </div>
                    </TabPanel>)}
                </JDtabs>
                    : notiLines?.map((noti, i) => <NotiLine key={noti.key || `NotiLi${i}`} {...noti} />)}
            </>
        </DropDown>
    </span>;
};

export default Noti;