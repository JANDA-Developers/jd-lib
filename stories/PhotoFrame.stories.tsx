import React from 'react';
import PhotoFrame from '../src/components/photoFrame/PhotoFrame';
import JDcontainer from '../src/components/container/Container';

export default {
	title: 'PhotoFrame',
	component: () => <PhotoFrame />,
};

export const standard = () => {
	const langOptions = {
		kr: 'kr',
		en: 'en'
	};
	return (
		<JDcontainer verticalPadding>
			<PhotoFrame
				responseImg
				type=".png"
				lang={'kr'}
				className="homepageRequest__topPhoto JDbgColor--primary"
				src={`https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/describe/homepage_request`}
			/>
		</JDcontainer>
	);
};

standard.story = {
	name: 'standard'
};
