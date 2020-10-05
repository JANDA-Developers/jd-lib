import React from 'react';
import Link, { JDlink, ILinkProp } from '../src/components/link/Link';
import JDcontainer from '../src/components/container/Container';
import {
    Title,
    Description,
    Stories,
    ArgsTable,
} from '@storybook/addon-docs/blocks';
import { useSwitch } from '../src/hooks/hook';

const Template = (args: ILinkProp) => <JDlink {...args} />;
export const PrimaryStory = Template.bind({});

const args: ILinkProp = {
    children: "naver.com",
    href: "naver.com"
};

PrimaryStory.args = args;

export default {
    title: '기본/Link',
    component: PrimaryStory,
    decorators: [
        (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
    ],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Link</Title>
                    <Description>Link 이펙트</Description>
                    <Stories />
                    <ArgsTable of={PrimaryStory} />
                </>
            ),
        },
    },
};

export const Standard = () => {
    const swtichHook = useSwitch(false);
    return (
        <>
            <h6>링크</h6>
            <Link
                href="http://google.com"
                mb="large"
                mr="no"
            >
                Google.com
            </Link>
        </>
    );
};
