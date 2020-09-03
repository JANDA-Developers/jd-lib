import React from 'react';
import PasswordReseter from '../src/components/passwordReseter/PasswordResetUi';
import { useModal } from '../src/hooks/hook';
import JDbutton from "../src/components/button/Button"

export const passwordFind = () => {
    const modalHook = useModal();

    return (
        <div>
            <JDbutton onClick={() => {
                modalHook.openModal();
            }}>변경하기</JDbutton>
            <PasswordReseter requireField={{
                email: true,
                password: true,
            }} modalHook={modalHook} startChangeCallBack={(param) => {
                console.info(param);
            }} completeChangeCallBack={(param) => {
                console.info(param);
            }} />
        </div>
    );
};

export const emailFind = () => {
    const modalHook = useModal();

    return (
        <div>
            <JDbutton onClick={() => {
                modalHook.openModal();
            }}>변경하기</JDbutton>
            <PasswordReseter modalHook={modalHook} startChangeCallBack={(param) => {
                console.info(param);
            }} completeChangeCallBack={(param) => {
                console.info(param);
            }} />
        </div>
    );
};


export default {
    title: 'PasswordChanger',
    component: passwordFind,
};

passwordFind.story = {
    name: 'passwordFind'
};

emailFind.story = {
    name: 'emailFind'
};
