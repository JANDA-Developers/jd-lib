import React from 'react';
import ShareBtn, { PCshareBtns } from '../src/components/social/ShareBtn';
import SocialHead from '../src/components/social/SocialHead';
import JDcontainer from '../src/components/container/Container';
import JDbutton from '../src/components/button/Button';

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <SocialHead content="JANDA 예약솔루션!" title="JANDA" url="" imgUrl="https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/icon/bookingIcon.png" />
            <ShareBtn shareProp={{
                text: "세사 모든 예약을 이곳에",
                title: "실시간 예약 솔루션 JANDA.",
                url: "https://stayjanda.com/",
            }} >
                <JDbutton mode="iconButton" iconProp={{
                    icon: "share"
                }} />
            </ShareBtn>

            <PCshareBtns />
        </JDcontainer>
    );
};


export default {
    title: 'ShareBtn',
    component: standard,
};

standard.story = {
    name: 'ShareBtn'
};
