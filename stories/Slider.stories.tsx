import React from 'react';
import Slider, { Slide } from '../src/components/slider/Slider';
import Align from '../src/components/align/Align';
import JDcontainer from '../src/components/container/Container';

export default {
	title: 'Slider',
	component: () => <Slider />,
};

export const standard = () => {
	const commonProp = {
		flex: {
			center: true,
			vCenter: true
		},
		style: {
			background: '#eee',
			height: '100px'
		}
	};
	return (
		<JDcontainer verticalPadding>
			<Slider>
				<Slide>
					<Align {...commonProp}>1</Align>
				</Slide>
				<Slide>2</Slide>
				<Slide>
					<Align {...commonProp}>3</Align>
				</Slide>
				<Slide>
					<Align {...commonProp}>4</Align>
				</Slide>
				<Slide>
					<Align {...commonProp}>5</Align>
				</Slide>
			</Slider>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
