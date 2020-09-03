import React from 'react';
import { JDcontainer } from "../src/components/container/Container";
import Nomatch from "../src/components/pages/Nomatch";

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <Nomatch handleGoBackBtn={() => { }} />
        </JDcontainer>
    );
};

export default {
    title: 'Nomatch',
    component: standard,
};


standard.story = {
    name: 'standard'
};
