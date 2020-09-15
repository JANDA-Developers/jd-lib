import React from 'react';
import { JDpreloader, JDalign, JDbutton, JDsplinter } from '../..';
import { useCheckBox, useInput } from '../../hooks/hook';
import JDtypho from '../typho/Typho';
import { InputText } from '../InputText/InputText';
import JDcheckBox from '../checkbox/CheckBox';
import TextButton from '../textButton/TextButton';
import LoginText from './component/LoginText';

export interface IProp {
  loading?: boolean;
  onSignUpClick?: () => void;
  onSignInClick?: (email: string, pw: string) => void;
  onFindEmailClick?: () => void;
  onFindPasswordClick?: () => void;
}

export const LoginUI: React.FC<IProp> = ({
  loading,
  onSignInClick,
  onSignUpClick,
  onFindEmailClick,
  onFindPasswordClick,
}) => {
  const lastPw = localStorage.getItem('lastPw');
  const lastEmail = localStorage.getItem('lastLogin');
  const saveIdHook = useCheckBox(lastEmail ? true : false);
  const savePasswordHook = useCheckBox(lastPw ? true : false);
  const emailHook = useInput(lastEmail || '');
  const passwordHook = useInput(lastPw ? lastPw : '');

  const handleSignInBtn = () => {
    if (saveIdHook.checked) localStorage.setItem('lastLogin', emailHook.value);
    else localStorage.removeItem('lastLogin');
    if (savePasswordHook.checked)
      localStorage.setItem('lastPw', passwordHook.value);
    else localStorage.removeItem('lastPw');

    onSignInClick && onSignInClick(emailHook.value, passwordHook.value);
  };

  return (
    <div className="login">
      <JDpreloader floating loading={loading} />
      <div className="Login JDtext-align-center">
        <div className="section">
          <div className="section">
            <JDtypho weight={300} size="h3" mb="huge">
              <LoginText />
            </JDtypho>
            <div>
              <InputText
                type="email"
                id="LoginEmail"
                Size="big"
                placeholder={'이메일 입력'}
                br="round"
                {...emailHook}
              />
            </div>
            <div>
              <InputText
                id="LoginPassword"
                type="password"
                placeholder={'비밀번호 입력'}
                Size="big"
                br="round"
                {...passwordHook}
              />
            </div>
            <div className="login__config">
              <JDalign
                flex={{
                  wrap: true,
                  vCenter: true,
                }}
              >
                <JDcheckBox
                  size="small"
                  {...saveIdHook}
                  mb="no"
                  label={'아이디저장'}
                  id="rememberID"
                />
                <JDcheckBox
                  size="small"
                  {...savePasswordHook}
                  mb="no"
                  label={'비밀번호저장'}
                  id="rememberID"
                />
              </JDalign>
            </div>
          </div>
          <JDbutton
            id="LoginBtn"
            thema="darkPrimary"
            br="round"
            size="longLarge"
            mode="flat"
            onClick={handleSignInBtn}
            label={'로그인'}
          />
          <TextButton onClick={onSignUpClick} mb="no" mr="no">
            회원가입
          </TextButton>
          <JDsplinter />
          <TextButton mb="no" mr="no" onClick={onFindPasswordClick}>
            비밀번호 찾기
          </TextButton>{' '}
          <JDsplinter />
          <TextButton mb="no" mr="no" onClick={onFindEmailClick}>
            이메일 찾기
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
