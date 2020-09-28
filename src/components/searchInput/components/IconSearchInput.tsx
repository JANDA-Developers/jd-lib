import React, { useState } from 'react';
import { JDalign } from '../../..';
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
            <JDicon className="iconSearch__searchIcon" hover icon="search2" />
            <JDicon className="iconSearch__closeIcon" hover onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(false);
            }} icon="close" />
        </JDalign>
    </div>;
};

export default IconSearchInput;
