import React from 'react';
import { CardProps } from '../src/components/cards/Card';
import JDcontainer from '../src/components/container/Container';
import {
    Title,
    Primary,
    Description,
    ArgsTable,
} from '@storybook/addon-docs/blocks';
import CopyInput, { ICopyInputProps } from "../src/components/InputText/component/CopyInput"

const Template = (args: ICopyInputProps) => <CopyInput {...args} />;
export const PrimaryStory = Template.bind({});

const args: CardProps = {};

PrimaryStory.args = args;

export default {
    title: '응용/Copy',
    component: PrimaryStory,
    decorators: [
        (Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
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

