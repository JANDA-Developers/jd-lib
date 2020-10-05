import React, { PropsWithChildren } from 'react';
import { JDalign, JDbutton } from '../..';
import { useInput, useSelect } from '../../hooks/hook';
import { IselectedOption } from '../../types/interface';
import { InputText } from '../InputText/InputText';
import JDselect from '../select/SelectBox';

interface IProp<T> {
    onSearch: (search: string, filter?: any) => void;
    filterOps?: IselectedOption<T>[];
    defaultOp: IselectedOption<T>
}


export const JDfooterSearch = <T,>({ defaultOp, onSearch, filterOps }: PropsWithChildren<IProp<T>>) => {
    const selectBoxHook = useSelect(defaultOp, filterOps);
    const inputTextHook = useInput("");

    return <JDalign flex>
        {filterOps && <JDselect {...selectBoxHook} autoSize size="small" />}
        <InputText Size="small" {...inputTextHook} />
        <JDbutton br="square" onClick={() => { onSearch(inputTextHook.value, selectBoxHook.selectedOption?.value,) }} mode="flat" thema="black" size="small">검색</JDbutton>
    </JDalign>
};


export default JDfooterSearch;