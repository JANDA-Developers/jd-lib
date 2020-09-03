import React from 'react';
import Switch from '../src/components/switch/Switch';
import JDcontainer from '../src/components/container/Container';
import { useSwitch } from '../src/hooks/hook';

export default {
	title: 'Switch',
	component: <Switch />,
};

export const standard = () => {
	const swithHook = useSwitch(false);
	return (
		<JDcontainer verticalPadding>
			<Switch {...swithHook} label="label" />
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
