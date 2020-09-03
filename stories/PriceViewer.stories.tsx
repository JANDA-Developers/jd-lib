import React from 'react';
import JDcontainer from '../src/components/container/Container';
import PriceViewer from "../src/components/priceViewer/PriceViewer";


export const standard = () => {

    const DummyData = [{
        price: 3000,
        describe: "1000 X 3(명)",
        title: "상품1"
    },
    {
        price: 25000,
        describe: "5000 X 5(명)",
        title: "상품2"
    },
    {
        price: 16000,
        describe: "4000 X 4(명)",
        title: "상품3",
        sub: [
            {
                price: 3000,
                describe: "1000 X 3(명)",
                title: "상품1"
            },
            {
                price: 25000,
                describe: "5000 X 5(명)",
                title: "상품2"
            }
        ]
    }];


    return (
        <JDcontainer verticalPadding>
            <PriceViewer priceLine={DummyData} />
        </JDcontainer>
    );

};


export const customResult = () => {

    const DummyData = [{
        price: 3000,
        describe: "1000 X 3(명)",
        title: "상품1"
    },
    {
        price: 25000,
        describe: "5000 X 5(명)",
        title: "상품2"
    },
    {
        price: 16000,
        describe: "4000 X 4(명)",
        title: "상품3",
        sub: [
            {
                price: 3000,
                describe: "1000 X 3(명)",
                title: "상품1"
            },
            {
                price: 25000,
                describe: "5000 X 5(명)",
                title: "상품2"
            }
        ]
    }];


    return (
        <JDcontainer verticalPadding>
            <PriceViewer lastLine={{
                price: 10000,
                title: "결과",
                describe: "결과"
            }} shouldShowResult={false} priceLine={DummyData} />
        </JDcontainer>
    );

};


export default {
    title: 'PriceViewer',
    component: standard,
};


standard.story = {
    name: 'standard'
};

customResult.story = {
    name: 'customResult'
};
