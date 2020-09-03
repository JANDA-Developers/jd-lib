import React, { useState } from 'react';
import SecurityViewer, { TCheck } from './SecurityViewer';
import { InputText } from '../InputText/InputText';
import { useInput } from '../../hooks/hook';


export const standard = () => {
    const passwordHook = useInput("");
    const [passwordCondition, setPasswordLevelViewer] = useState<TCheck>({
        enAndNumber: false,
        length: false,
        special: false,
        checkedCount: 0
    });

    return (
        <div>
            <div>
                <InputText label="패스워드" {...passwordHook} />
            </div>
            <SecurityViewer password={passwordHook.value} setPasswordCondition={setPasswordLevelViewer} passwordCondition={passwordCondition} />
        </div>
    );
};


export default {
    title: 'SecurityViewer',
    component: standard,
};

standard.story = {
    name: 'standard'
};
