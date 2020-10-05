import React from 'react';
import JDtoast from "../src/components/toast/Toast"
import JDcontainer from '../src/components/container/Container';
import JDcopyInput, { ICopyInputProps } from "../src/components/InputText/component/CopyInput";
import {
    Title,
    Primary,
    Description,
    ArgsTable,
} from '@storybook/addon-docs/blocks';

const Template = (args: ICopyInputProps) => <JDcopyInput value="Copy This Message"  {...args} />;
export const PrimaryStory = Template.bind({});
const args: ICopyInputProps = {};

PrimaryStory.args = args;

export default {
    title: '응용/Copy',
    component: PrimaryStory,
    decorators: [
        (Story: any) => <JDcontainer verticalPadding>
            <JDtoast />
            {Story()}</JDcontainer>,
    ],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>CopyInput</Title>
                    <Description>CopyInput 사용자에게 무언가 복사 시킬떄 유용</Description>
                    <Primary />
                    <ArgsTable of={PrimaryStory} />
                </>
            ),
        },
    },
};

