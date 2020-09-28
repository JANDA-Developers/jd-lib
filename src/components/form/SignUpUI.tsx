import React from 'react';
import { JDlabel, JDalign, JDbutton } from '../..';
import { InputText } from '../InputText/InputText';
import { useCheckBox, useInput } from '../../hooks/hook';
import { isEmail, isPhone, isPassword } from '../../utils/utils';
import { toast } from 'react-toastify';
import { focusWithScroll } from '../../utils/parentScroll';
import JDcheckBox from '../checkbox/CheckBox';
import PasswordChecker from '../passwordChecker/PasswordCheck';
import { PolicyViewer } from '../policy/PolicyViewer';

export type TSignUpInfo = {
  agree: boolean;
  email: string;
  name: string;
  num: string;
  company: string;
  password: string;
}

export interface IProps {
  onPhoneVerification?: () => Promise<boolean>;
  onSignUpClick: (info: TSignUpInfo, validate: boolean) => void;
  Policy?: string | JSX.Element;
}


const SignUpUI: React.FC<IProps> = ({
  onPhoneVerification,
  onSignUpClick,
  Policy,
}) => {
  const isDev = process.env.NODE_ENV === 'development';
  const agreePolicyHook = useCheckBox(true);
  const emailHook = useInput(isDev ? "colton950901@gmail.com" : '');
  const nameHook = useInput(isDev ? "개발" : "");
  const phoneNumberHook = useInput(isDev ? "01052374492" : "");
  const companyNameHook = useInput(isDev ? "janda" : "");
  const passwordHook = useInput(isDev ? "#janda123" : "");
  const passwordCheckHook = useInput(isDev ? "#janda123" : "");


  const info: TSignUpInfo = {
    agree: agreePolicyHook.checked,
    email: emailHook.value,
    name: nameHook.value,
    num: phoneNumberHook.value,
    company: companyNameHook.value,
    password: passwordHook.value
  }



  const validate = () => {
    if (!isEmail(emailHook.value)) {
      toast.warn('올바른 이메일이 아닙니다.');
      const target = document.getElementById('EmailInput');
      focusWithScroll(target);
      return false;
    }
    if (!agreePolicyHook.checked) {
      toast.warn('개인정보 동의 부탁드립니다.');
      const target = document.getElementById('AgreePolicy');
      focusWithScroll(target);
      return false;
    }
    if (passwordCheckHook.value !== passwordHook.value) {
      toast.warn('비밀번호가 일치하지 않습니다.');
      const target = document.getElementById('AgreePolicy');
      focusWithScroll(target);
      return false;
    }
    if (!companyNameHook.value) {
      toast.warn('회사명을 입력 해주세요.');
      const target = document.getElementById('CompanayName');
      focusWithScroll(target);
      return false;
    }
    if (!passwordHook.isValid) {
      toast.warn('올바른 비밀번호가 아닙니다.');
      const target = document.getElementById('PasswordInput');
      focusWithScroll(target);
      return false;
    }
    if (!isPhone(phoneNumberHook.value)) {
      toast.warn('올바른 번호가 아닙니다.');
      const target = document.getElementById('PasswordInput');
      focusWithScroll(target);
      return false;
    }
    return true;
  };

  return (
    <div className={`signup`}>
      <div className="JDstandard JDstandard-largest-mb">
        <div>
          <InputText id="NameInput" label={'성함'} {...nameHook} />
        </div>
        <div>
          <InputText
            //@ts-ignore
            autocomplete="off"
            id="EmailInput"
            label={'이메일'}
            {...emailHook}
          />
        </div>
        <JDlabel txt={'핸드폰번호'} />
        <JDalign
          mb="normal"
          flex={{
            vCenter: true,
            grow: true,
          }}
        >
          <InputText
            id="PhoneNumberInput"
            hyphen
            {...phoneNumberHook}
            mb="no"
          />
        </JDalign>
        <div>
          <InputText
            type="password"
            id="PasswordInput"
            label={'비밀번호'}
            validation={isPassword}
            {...passwordHook}
          />
        </div>
        <div>
          <div>
            <InputText
              type="password"
              id="PasswordCheckInput"
              label={'비밀번호 확인'}
              {...passwordCheckHook}
            />
          </div>
          <p className="JDsmall-text">
            <PasswordChecker txt={passwordHook.value} />
          </p>
        </div>
        <div>
          <InputText id="CompanayName" label={'회사명'} {...companyNameHook} />
        </div>
        <div className="flex-grid__col col--full-12 col--md-12">
          <PolicyViewer>{Policy}</PolicyViewer>
        </div>
        <div>
          <JDcheckBox
            id="AgreePolicy"
            label={'개인정보제공동의'}
            {...agreePolicyHook}
          />
          <JDcheckBox
            id="AgreePolicy"
            label={'개인정보제공 비 동의'}
            checked={!agreePolicyHook.checked}
            onChange={() => {
              agreePolicyHook.onChange(false);
            }}
          />
        </div>
      </div>
      <JDbutton
        mb="no"
        thema="primary"
        className=""
        id="SingupSubmitBtn"
        label={'회원가입 완료'}
        onClick={async () => {
          if (onPhoneVerification) {
            const result = await onPhoneVerification();
            if (result) onSignUpClick(info, validate());
          } else {
            onSignUpClick(info, validate());
          }
        }}
      />
    </div>
  );
};

export default SignUpUI;
