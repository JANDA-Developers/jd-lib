import React from 'react';
import DayPicker, { TDayPickerDot, IJDdayPickerProps } from '../src/components/dayPicker/DayPicker';
import { useDayPicker } from '../src/hooks/hook';
import JDcontainer from '../src/components/container/Container';
import JDtypho from '../src/components/typho/Typho';
import moment from 'moment-timezone';
import JDdayPicker from '../src/components/dayPicker/DayPicker';
import { ArgsTable, Description, Primary, Stories, Title } from '@storybook/addon-docs/blocks';
import DoubleInputRange from '../src/components/dayPicker/component/inputComponent/DoubleInputRange';

const Template = (args: Partial<IJDdayPickerProps>) => {
	const dayPickerHook = useDayPicker(null, null);
	return <DayPicker {...dayPickerHook} {...args} />
};
export const PrimaryStory = Template.bind({});


export default {
	title: 'DayPicker',
	component: PrimaryStory,
	decorators: [
		(Story: any) => <JDcontainer id="root" verticalPadding>{Story()}</JDcontainer>,
	],
	docs: {
		page: () => (
			<div id="root">
				<Title>DayPicker</Title>
				<Description>DayPicker 날짜선택</Description>
				<Primary />
				<Stories />
				<ArgsTable of={PrimaryStory} />
			</div>
		),
	},
}


export const InputComponent = () => {
	const dayPickerHook = useDayPicker(null, null);

	return (
		<JDcontainer verticalPadding>
			<div style={{
				position: "relative"
			}} >
				<JDdayPicker mode="input" isRange numberOfMonths={2} {...dayPickerHook} inputComponent={(prop: any) =>
					<div style={{
						position: "relative"
					}}>
						<span>
							{moment(dayPickerHook.from || new Date).format("YYYY-MM-DD")}
						</span>
						<span>
							{moment(dayPickerHook.to || new Date).format("YYYY-MM-DD")}
						</span>
						<input style={{
							opacity: 0,
							top: 0,
							left: 0,
							right: 0,
							position: "absolute"
						}} id="hidden" {...prop} />
					</div>
				} />
			</div>

		</JDcontainer >
	);
};


export const standard = () => {
	const dayPickerHook = useDayPicker(null, null);
	const dots: TDayPickerDot[] = [
		{
			color: 'error',
			date: new Date()
		}
	];

	return (
		<JDcontainer verticalPadding>
			<JDtypho mb="normal" weight={600}>
				달력모드
			</JDtypho>
			<DayPicker mb="largest" dots={dots} {...dayPickerHook} />
			<JDtypho mb="normal" weight={600}>
				인풋 모드
			</JDtypho>
			<DayPicker mode="input" {...dayPickerHook} />
		</JDcontainer>
	);
};


export const DoubleRangeInput = () => {
	const dayPicker = useDayPicker(null, null);

	return (
		<JDcontainer verticalPadding>
			<DayPicker {...dayPicker} mode="input" inputComponent={(prop) => {
				return <DoubleInputRange {...prop} dayPickerHook={dayPicker} />
			}} />
		</JDcontainer>
	);
};
