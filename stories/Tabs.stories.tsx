import React from 'react';
import { JDtabs, Tab, TabList, TabPanel } from '../src/components/tabs/Tabs';
import JDcontainer from '../src/components/container/Container';

export default {
	title: 'Tabs',
	component: <JDtabs />,
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<JDtabs>
				<TabList>
					<Tab>사과</Tab>
					<Tab>바나나</Tab>
				</TabList>
				<TabPanel>Apple</TabPanel>
				<TabPanel>Banana</TabPanel>
			</JDtabs>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
