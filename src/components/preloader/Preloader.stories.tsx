import React from 'react';
import Preloader from './Preloader';
import JDcontainer from '../container/Container';

export default {
	title: 'Preloader',
	component: <Preloader />,
};

export const page = () => {
	return (
		<JDcontainer verticalPadding>
			<Preloader page loading={true} />
		</JDcontainer>
	);
};

export const standard = () => {
	return (
		<JDcontainer verticalPadding>
			<Preloader loading={true} />
		</JDcontainer>
	);
};

page.story = {
	name: 'page'
};

standard.story = {
	name: 'standard'
};
