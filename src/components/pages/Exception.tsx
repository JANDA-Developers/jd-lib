import React from "react";
import JDbutton,{IButtonProps} from "../../components/button/Button";
import { IDiv } from "../../types/interface";

interface IProps extends IDiv {
    title:string;
    text:string;
    img:string | "404" | "expire" | "deny";
    button?: IButtonProps 
}

const Exception: React.FC<IProps> = ({ button:buttonProp, img, text, title,...props }) => {

    const img_list = {
        "404": 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/nopage.png',
        "expire": 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/expire.png',
        "deny":'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/warn-triangle.png'
    }

    const tempImg = img_list[img] || img;

    return <div className={"exception"} {...props}>
        <img className={"exception__img"} src={tempImg}/>
        <h1 className={"exception__title"}>{title}</h1>
        <p className={"exception__desc"}>{text}</p>
        <JDbutton className={"exception__input"} label="Back to Home" {...buttonProp}/>
    </div>
    
}

export default Exception;