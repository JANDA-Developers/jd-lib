import React from 'react';
import RadioButton from '../src/components/radioButton/RadioButton';
import JDcontainer from '../src/components/container/Container';
import { useRadioButton } from '../src/hooks/hook';

const options = [
	{
		label: '1',
		value: '1'
	},
	{
		label: '2',
		value: '2'
	},
	{
		label: '3',
		value: '3'
	}
];


export const standard = () => {
	const radioBoxHook = useRadioButton(['1'], options);

	return (
		<JDcontainer verticalPadding>
			<h6>Noraml</h6>
			<RadioButton {...radioBoxHook} />
			<h6>Border</h6>
			<RadioButton
				btnProps={{
					mode: 'border'
				}}
				{...radioBoxHook}
			/>
			<h6>Gather</h6>
			<RadioButton mode="gather" {...radioBoxHook} />
			<h6>Only</h6>
			<RadioButton only {...radioBoxHook} />
			<h6>With All</h6>
			<RadioButton withAllTooglerLabel="전체투글" withAllToogler {...radioBoxHook} />
		</JDcontainer>
	);
};


export default {
	title: 'RadioButton',
	compoents: standard
};

standard.story = {
	name: 'standard'
};
