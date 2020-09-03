import React from 'react';
import DayPicker, { TDayPickerDot } from './DayPicker';
import { useDayPicker } from '../../hooks/hook';
import JDcontainer from '../container/Container';
import JDtypho from '../typho/Typho';
import moment from 'moment-timezone';
import JDdayPicker from './DayPicker';

export default {
	title: 'DayPicker',
	component: () => {
		const dayPickerHook = useDayPicker(null, null);

		return <DayPicker {...dayPickerHook} />;
	},
};


export const inputComponent = () => {
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

standard.story = {
	name: 'standard'
};

inputComponent.stroy = {
	name: 'CustomInput DayPicker'
}
