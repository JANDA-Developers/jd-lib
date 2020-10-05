import React, { useState } from 'react';
import JDpreloader, { IPreloaderConfigProps } from '../src/components/preloader/Preloader';
import JDcontainer from '../src/components/container/Container';
import {
	Title,
	Primary,
	Description,
	Stories,
	ArgsTable,
} from '@storybook/addon-docs/blocks';
import { JDbutton } from '../src';

const Template = (args: IPreloaderConfigProps) => <JDpreloader {...args} />;
export const PrimaryStory = Template.bind({});

const args: IPreloaderConfigProps = {
};

PrimaryStory.args = args;

export default {
	title: '기본/Prelaoder',
	component: PrimaryStory,
	decorators: [
		(Story: any) => <JDcontainer verticalPadding>{Story()}</JDcontainer>,
	],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title>Preloader</Title>
					<Description>Preloader 이펙트</Description>
					<Stories />
					<ArgsTable of={PrimaryStory} />
				</>
			),
		},
	},
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<JDpreloader size="tiny" loading={true} />
			<JDpreloader size="small" loading={true} />
			<JDpreloader size="medium" loading={true} />
			<JDpreloader size="large" loading={true} />
		</JDcontainer>
	);
};

export const page = () => {
	const [loading, setLoading] = useState(false);

	return (
		<JDcontainer verticalPadding>
			<JDbutton thema="primary" label="로딩시작" onClick={() => { setLoading(true) }} />
			<JDpreloader page loading={loading} onClick={() => { setLoading(false) }} />
		</JDcontainer>
	);
};
