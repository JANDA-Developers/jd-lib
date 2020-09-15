import React from 'react';
import { share, Tshare } from '../../utils/share';
import JDbutton from '../button/Button';
import JDalign from '../align/Align';

export const PCshareBtns: React.FC = () => {
  const title_this_page = '공간예약';
  const url_default_ks = 'https://story.kakao.com/share?url=';
  const url_default_fb = 'https://www.facebook.com/sharer/sharer.php?u=';
  const url_default_tw_txt = 'https://twitter.com/intent/tweet?text=';
  const url_default_tw_url = '&url=';
  const url_default_naver = 'http://share.naver.com/web/shareView.nhn?url=';
  const title_default_naver = '&title=';
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
        br="square"
        mode="border"
        padding="tiny"
        onClick={() => {
          window.open(
            url_combine_fb,
            '',
            'scrollbars=no, width=600, height=600'
          );
          return false;
        }}
      >
        <img
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          title="페이스북으로 공유하기"
          className="sharebtn_custom"
          style={{ width: 32 }}
        />
      </JDbutton>
      <JDbutton
        mode="border"
        padding="tiny"
        br="square"
        onClick={() => {
          window.open(
            url_combine_tw,
            '',
            'scrollbars=no, width=600, height=600'
          );
          return false;
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/1200px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png"
          title="트위터로 공유하기"
          className="sharebtn_custom"
          style={{ width: 32 }}
        />
      </JDbutton>
      <JDbutton
        mode="border"
        padding="tiny"
        br="square"
        onClick={() => {
          window.open(
            url_combine_ks,
            '',
            'scrollbars=no, width=600, height=600'
          );
          return false;
        }}
      >
        <img
          src="https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT.jpg"
          title="카카오스토리로 공유하기"
          className="sharebtn_custom"
          style={{ width: 32 }}
        />
      </JDbutton>
      <JDbutton
        mode="border"
        padding="tiny"
        br="square"
        onClick={() => {
          window.open(
            url_combine_naver,
            '',
            'scrollbars=no, width=600, height=600'
          );
          return false;
        }}
      >
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjI4/MDAxNTMwMzQ1MDg1MDU1.4hjqKQKk4kVKAZBR58Sjsf1wF9KfV2Aahqp1B-c0ML0g.7kdimnePwiBLXhr310KxVUAL0fQkTSVHxxCKgIjip2Qg.PNG.beaqon/naver.png?type=w800"
          title="네이버로 공유하기"
          className="sharebtn_custom"
          style={{ width: 32 }}
        />
      </JDbutton>
    </JDalign>
  );
};

interface IProp {
  shareProp: Tshare;
}

export const JDshareBtn: React.FC<IProp> = ({ children, shareProp }) => {
  if (typeof navigator.share === 'undefined') {
    return <span data-err="소셜 공유 기능이 없는 브라우저" />;
  }

  return (
    <div
      onClick={() => {
        share(shareProp);
      }}
    >
      {children}
    </div>
  );
};
export default JDshareBtn;
