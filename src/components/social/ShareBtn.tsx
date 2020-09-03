import React from "react";
import { share, Tshare } from "../../utils/share";
import JDbutton from "../button/Button";
import JDalign from "../align/Align";

export const PCshareBtns: React.FC = () => {
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




interface IProp {
    shareProp: Tshare
}


export const JDshareBtn: React.FC<IProp> = ({ children, shareProp }) => {
    if (typeof navigator.share === "undefined") {
        return <span data-err="소셜 공유 기능이 없는 브라우저" />
    }

    return <div onClick={() => {
        share(shareProp)
    }}>{children}</div>
}
export default JDshareBtn;