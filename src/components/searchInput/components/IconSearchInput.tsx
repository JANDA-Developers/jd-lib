import React, { useState } from 'react';
import { JDalign } from '../../..';
import Fade from '../../../animations/Fade';
import { JDicon } from '../../icons/Icons';
import { InputText } from '../../InputText/InputText';
import { TSearchComponentProp } from "../SearchInput"

interface IProp extends TSearchComponentProp {
}

export const IconSearchInput: React.FC<IProp> = ({ ...props }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <div
        onClick={() => {
            setOpen(true);
        }}
        className={`iconSearch ${open || 'JDhover'} ${open && "iconSearch--open"}`}>
        <JDalign flex={{
            vCenter: true
        }}>
            <InputText placeholder="search" mr="no" mb="no" Size="small" {...props} className="iconSearch__input" />
            <Fade animation="roate" show={!open}>
                <JDicon className="iconSearch__searchIcon" hover icon="search2" />
            </Fade>
            <Fade animation="roate" show={open}>
                <JDicon className="iconSearch__closeIcon" hover onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpen(false);
                }} icon="close" />
            </Fade>
        </JDalign>
    </div>;
};

export default IconSearchInput;
