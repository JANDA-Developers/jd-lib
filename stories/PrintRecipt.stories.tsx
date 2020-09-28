import React from 'react';
import { Button } from '../src/components/button/Button';
import JDcontainer from '../src/components/container/Container';
import {
    Title,
    Description,
    Source
} from '@storybook/addon-docs/blocks';
import { printRecipt } from '../src/utils/printRecipt';
import { ITableInfo } from '../src/components/recipt/components/TableRender';

export const Standard = () => {

    const dummyTable: ITableInfo[] = [{
        title: "결제정보",
        infos: [[{
            label: "결제수단",
            value: "카드결제"
        }, {
            label: "결제금액",
            value: "300,000"
        }], [{
            label: "결제일",
            value: "2020.03.42"
        }, {
            label: "승인일",
            value: "2020.03.42"
        }]]
    },
    {
        title: "상품정보",
        infos: [[{
            label: "상품명",
            value: "4인실룸1"
        }, {
            label: "상품갯수",
            value: "1"
        }]]
    }
    ];

    const reciptOpen = () => {
        printRecipt(dummyTable)
    }

    return (
        <JDcontainer verticalPadding>
            <Button onClick={reciptOpen} thema="primary" label={'영수증출력'} />
            {/* <div id="recipt">
                <CardRecipt tables={dummyTable} />
            </div> */}
        </JDcontainer>
    );
};


export default {
    title: '기타/Recipt',
    component: Standard,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Recipt</Title>
                    <Description>Recipt</Description>
                    <Standard />
                    <Source dark language="tsx" code='
export const Standard = () => {

    const dummyTable: ITableInfo[] = [{
        title: "결제정보",
        infos: [[{
            label: "결제수단",
            value: "카드결제"
        }, {
            label: "결제금액",
            value: "300,000"
        }], [{
            label: "결제일",
            value: "2020.03.42"
        }, {
            label: "승인일",
            value: "2020.03.42"
        }]]
    },
    {
        title: "상품정보",
        infos: [[{
            label: "상품명",
            value: "4인실룸1"
        }, {
            label: "상품갯수",
            value: "1"
        }]]
    }
    ];

    const reciptOpen = () => {
        printRecipt(dummyTable)
    }

    return (
        <JDcontainer verticalPadding>
            <Button onClick={reciptOpen} thema="primary" label={"영수증출력"} />
            {/* <div id="recipt">
                <CardRecipt tables={dummyTable} />
            </div> */}
        </JDcontainer>
    );
};
                    '  />
                </>
            ),
        },
    },
};

