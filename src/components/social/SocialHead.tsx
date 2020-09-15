import React from 'react';
import { Helmet } from 'react-helmet';

interface IProp {
  /** 공유 URL 을 넣기 */
  url: string;
  /** 공유 썸네일 Img URL */
  imgUrl: string;
  /** 콘텐츠내용 */
  content: string;
  /** 타이틀 */
  title: string;
  /** 사이트이름 */
  siteName?: string;
}

export const SocialHead: React.FC<IProp> = ({
  siteName,
  content,
  title,
  url,
  imgUrl,
}) => (
  <Helmet>
    <meta name="description" content={content} />
    {/* // <!-- Facebook Meta Tags / 페이스북 오픈 그래프 --/> */}
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={content} />
    <meta property="og:image" content={imgUrl} />
    {siteName && <meta property="og:site_name" content={siteName} />}
    {/* <!-- Twitter Meta Tags / 트위터 --/> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={content} />
    <meta name="twitter:image" content={imgUrl} />
    {/* <!-- Google / Search Engine Tags / 구글 검색 엔진 --/> */}
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={content} />
    <meta itemProp="image" content={imgUrl} />
    {/* Me2 day */}
    <meta property="me2:post_body" content={content} />
    {/* <meta property="me2:post_tag" content="태그" /> */}
    <meta property="me2:image" content={imgUrl} />
    {/* <meta property="me2:latitude" content="위도" /> */}
    {/* <meta property="me2:longitude" content="경도" /> */}
    {/* <meta property="me2:post_icon" content="포스트 아이콘 (1~12 숫자" /> */}
    {/* <meta property="me2:category1" content="카테고리1" /> */}
    {/* <meta property="me2:category2" content="카테고리2" /> */}
    {/* Android & IOS 앱 미리보기*/}
    {/* <meta property="al:ios:url" content="..." />
        <meta property="al:ios:app_store_id" content="..." />
        <meta property="al:ios:app_name" content="..." />
        <meta property="al:android:url" content="..." />
        <meta property="al:android:app_name" content="..." />
        <meta property="al:android:package" content="..." />
        <meta property="al:web:url" content="..." /> */}
  </Helmet>
);

export default SocialHead;
