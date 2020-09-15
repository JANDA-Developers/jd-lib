import React from 'react';
import ShareBtn, { PCshareBtns } from '../src/components/social/ShareBtn';
import SocialHead from '../src/components/social/SocialHead';
import JDcontainer from '../src/components/container/Container';
import JDbutton from '../src/components/button/Button';
import {
  Title,
  Primary,
  Description,
  Stories,
  ArgsTable,
  Source,
} from '@storybook/addon-docs/blocks';

export const Standard = () => {
  return (
    <JDcontainer id="root" verticalPadding>
      <SocialHead
        content="JANDA 예약솔루션!"
        title="JANDA"
        url=""
        imgUrl="https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/icon/bookingIcon.png"
      />
      <ShareBtn
        shareProp={{
          text: '세사 모든 예약을 이곳에',
          title: '실시간 예약 솔루션 JANDA.',
          url: 'https://stayjanda.com/',
        }}
      >
        <JDbutton
          mode="iconButton"
          iconProp={{
            icon: 'share',
          }}
        />
      </ShareBtn>

      <PCshareBtns />
    </JDcontainer>
  );
};

export default {
  title: '기타/Social',
  component: Standard,
  decorators: [Story => <JDcontainer verticalPadding>{Story()}</JDcontainer>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Social</Title>
          <Description>
            소셜 공유 버튼을 만들때 복잡한 코딩없이 메타데이터를 쉽게 전달할 수
            있습니다. SocialHead 컴포넌트에 메타데이터를 기록 ShareBtn 은
            모바일을 공유를 도와주는 버튼입니다.
          </Description>
          <Description>
            #PCshareBtns PC 공유는 별개입니다. 아래쪽 샘플코드를 통해 PC 공유를
            만들어 보세요.
          </Description>
          <Primary />
          <Stories />
          소셜헤더
          <ArgsTable of={SocialHead} />
          Share Btn
          <ArgsTable of={ShareBtn} />
          PC 공유
          <Source
            code='
 PCshareBtns: React.FC = () => {
    const title_this_page = "공간예약";
    const url_default_ks = "https://story.kakao.com/share?url=";
    const url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
    const url_default_tw_txt = "https://twitter.com/intent/tweet?text=";
    const url_default_tw_url = "&url=";
    const url_default_naver = "http://share.naver.com/web/shareView.nhn?url=";
    const title_default_naver = "&title=";
    const url_this_page = location.href;
    const url_combine_ks = url_default_ks + url_this_page;
    const url_combine_fb = url_default_fb + url_this_page;
    const url_combine_tw =
        url_default_tw_txt + document.title + url_default_tw_url + url_this_page;
    const url_combine_naver =
        url_default_naver +
        encodeURI(url_this_page) +
        title_default_naver +
        encodeURI(title_this_page);

    return (
        <JDalign>
            <JDbutton
                onClick={() => {
                    window.open(
                        url_combine_fb,
                        "",
                        "scrollbars=no, width=600, height=600"
                    );
                    return false;
                }}
            >
                <img
                    src="//cfile10.uf.tistory.com/image/ 23E6BF33597DDB2112AFD3"
                    title="페이스북으로 공유하기"
                    className="sharebtn_custom"
                    style={{ width: 32 }}
                />
            </JDbutton>
            <JDbutton
                onClick={() => {
                    window.open(
                        url_combine_tw,
                        "",
                        "scrollbars=no, width=600, height=600"
                    );
                    return false;
                }}
            >
                <img
                    src="//cfile27.uf.tistory.com/image/ 24DCB633597DDB2110B554"
                    title="트위터로 공유하기"
                    className="sharebtn_custom"
                    style={{ width: 32 }}
                />
            </JDbutton>
            <JDbutton
                onClick={() => {
                    window.open(
                        url_combine_ks,
                        "",
                        "scrollbars=no, width=600, height=600"
                    );
                    return false;
                }}
            >
                <img
                    src="//cfile9.uf.tistory.com/image/ 248F2A33597DDB21106A56"
                    title="카카오스토리로 공유하기"
                    className="sharebtn_custom"
                    style={{ width: 32 }}
                />
            </JDbutton>
            <JDbutton
                onClick={() => {
                    window.open(
                        url_combine_naver,
                        "",
                        "scrollbars=no, width=600, height=600"
                    );
                    return false;
                }}
            >
                <img
                    src="//cfile27.uf.tistory.com/image/2356C533597DDB21169BDB"
                    title="네이버로 공유하기"
                    className="sharebtn_custom"
                    style={{ width: 32 }}
                />
            </JDbutton>
        </JDalign>
    );
};
            '
          />
        </>
      ),
    },
  },
};
