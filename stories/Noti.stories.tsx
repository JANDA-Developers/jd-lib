import React from 'react';
import JDcontainer from '../src/components/container/Container';
import {
    Title,
    Description,
    Stories,
    ArgsTable,
} from '@storybook/addon-docs/blocks';
import Noti, { INotiProp } from "../src/components/notification/Noti"
import { INotiLineProp } from "../src/components/notification/components/NotiLine"
import JDlink from '../src/components/link/Link';
import { useInput } from '../src';
import moment from "moment";

const Template = (args: INotiProp) => <Noti {...args} />;
export const PrimaryStory = Template.bind({});

const args: INotiProp = {
};

PrimaryStory.args = args;

export default {
    title: '기타/Noti',
    component: PrimaryStory,
    decorators: [
        (Story: any) => <JDcontainer id="root" style={{
            padding: "20rem",
            paddingTop: 0
        }} verticalPadding>{Story()}</JDcontainer>,
    ],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Noti</Title>
                    <Description>Noti 알림 UI</Description>
                    <Stories />
                    <ArgsTable of={PrimaryStory} />
                </>
            ),
        },
    },
};




const today = new Date();
today.setHours(4)



const DUMMY_DATA2: INotiLineProp[] = [{
    date: moment().add(-2, "d").toDate(),
    title: "Lorem Text Lorem Text Lorem Text Lorem TextLorem Text Lorem Text Lorem Text Lorem Text Lorem Text Lorem Text ",
    desc: "Lorem Tooltip"
}]

const DUMMY_DATA: INotiLineProp[] = [{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
    desc: "N번방을 예약 결제완료 N번방을 예약 결제완료 N번방을 예약 결제완료 N번방을 예약 결제완료"
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
},
{
    date: today,
    title: <span><JDlink>김민재</JDlink>님의 신규 구매</span>,
}
]

export const Standard = () => {
    return (
        <>
            <h5> 기본 </h5>
            <Noti notiLines={DUMMY_DATA} iconProp={{
                size: "large"
            }} />
        </>
    );
};

export const FullOption = () => {
    const searchInputHook = useInput("");
    return (
        <>
            <h6>풀 옵션</h6>
            <Noti unReadCount={3} tabs={[{
                data: DUMMY_DATA2,
                name: "읽지않음"
            },
            {
                data: DUMMY_DATA,
                name: "전체노티"
            }
            ]} searchHook={searchInputHook} iconProp={{
                size: "large"
            }} />
        </>
    );
}