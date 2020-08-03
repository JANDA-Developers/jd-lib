import React, { useState } from 'react';
import { JDcontainer } from "../..";
import Exception from "./Exception";


export const standard = () => {
    const [value, setValue] = useState<string>("PAGE NOT FOUND");
  
    return (
        <JDcontainer verticalPadding>
            <Exception  
            title={value}
            text="페이지를 찾지 못했습니다"
            img={""}
            button = {{thema:"black"}}
            />
            <input value={value} onChange={(e)=>{
                setValue(e.currentTarget.value);
                }}/>
        </JDcontainer>
    );
};

export default {
    title: 'Nomatch',
    component: standard,
};


standard.story = {
    name: 'standard'
};
