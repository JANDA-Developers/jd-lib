import React from "react";
import JDbutton from "../button/Button";


interface IProps {
    handleGoBackBtn: () => void;
}

const Nomatch: React.FC<IProps> = ({ handleGoBackBtn }) => {
    return <div>
        404 페이지 돌아가세요
        <JDbutton onClick={handleGoBackBtn} label="돌아가기" />
    </div>
}

export default Nomatch;