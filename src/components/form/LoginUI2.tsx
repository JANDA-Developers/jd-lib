import React from "react"
import { JDalign } from '../..'
import JDcard from '../cards/Card'
import JDtypho from '../typho/Typho'
import LoginText from './component/LoginText'
import LoginUI from './LoginUI'
import { ILoginUiProp } from "./LoginUI"

interface IProps extends ILoginUiProp {
    onBookMarkClick: (index: number) => void
    activeBookMark: number
}

//우선 여기 구현 다른대로 옴겨갈 가능성이 있음.
const LoginUI2: React.FC<IProps> = ({ activeBookMark, onBookMarkClick, ...props }) => {
    return <div className="loginUi2">
        <JDalign text="center">
            <JDtypho style={{
                paddingBottom: "2.4rem"
            }} weight={300} size="h3" mb="largest">
                <LoginText />
            </JDtypho>
        </JDalign>
        <JDcard
            bookMarks={[{
                children: "Booking Solution",
                onClick: () => { onBookMarkClick(1) },
                activate: activeBookMark === 1,
                decoColor: '#4C5B73',
            }, {
                children: "Booking Light",
                onClick: () => { onBookMarkClick(2) },
                activate: activeBookMark === 2,
                decoColor: '#D26436'
            }, {
                children: "Time Space",
                onClick: () => { onBookMarkClick(3) },
                activate: activeBookMark === 3,
                decoColor: '#00C431'
            }]}>
            <LoginUI {...props} />
        </JDcard>
    </div>
}

export default LoginUI2;
