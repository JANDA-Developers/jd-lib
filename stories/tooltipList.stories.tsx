import React from 'react';
import TooltipList, { TooltipButtons } from '../src/components/tooltipList/TooltipList';
import JDcontainer from '../src/components/container/Container';
import JDalign from "../src/components/align/Align";
import JDbutton from "../src/components/button/Button";


export default {
    title: 'TooltipList',
    component: <TooltipList />,
};

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <JDalign
                flex>
                <div
                    data-tip
                    data-place="bottom"
                    data-for="menuId"
                    data-event="click"
                >
                    <JDbutton
                        label="열기" />
                </div>
            </JDalign>
            <TooltipList floatBottom >
                <TooltipButtons
                    Buttons={[
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "Apple",
                        },
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "peer",
                        },
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "banana",
                        },
                    ]}
                /></TooltipList>
        </JDcontainer>
    );
};

standard.story = {
    name: 'standard'
};
