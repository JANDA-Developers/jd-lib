import React from 'react';
import { useInput, IUseModal } from '../../hooks/hook';
import { useState } from 'react';
import { isPhone, isEmail } from '../../utils/utils';
import { toast } from 'react-toastify';
import Button from '../button/Button';
import { InputText } from '../InputText/InputText';
import Align from '../align/Align';
import JDmodal, { JDmodalConfigProps } from '../modal/Modal';
import SecurityLevelViewer, { TCheck } from '../securityViewer/SecurityViewer';

type CompleteCallBackParam = {
  email: string;
  key: string;
  newPassword: string;
  newPasswordRe: string;
  phoneNumber: string;
};

type ChangeStartCallBackParam = {
  email: string;
  phoneNumber: string;
};

type TPasswordReseterLangs = {
  not_a_valid_phoneNumber: string;
  not_a_valid_email: string;
  password_is_not_matched: string;
  please_rewrite_your_new_password: string;
  password_rewrite: string;
  eamil: string;
  phoneNumber: string;
  authenticate: string;
  certification_number: string;
  new_password: string;
  check_new_password: string;
  confirm: string;
};

const DEFAULT_LANGS = {
  eamil: '이메일',
  not_a_valid_email: '올바른 이메일이 아닙니다.',
  not_a_valid_phoneNumber: '올바른 번호가 아닙니다.',
  password_is_not_matched: '비밀번호가 일치하지 않습니다.',
  password_rewrite: '패스워드 재작성',
  phoneNumber: '핸드폰번호',
  please_rewrite_your_new_password: '새로운 비밀번호를 입력 해주세요.',
  confirm: '확인',
  authenticate: '인증하기',
  certification_number: '인증번호',
  new_password: '새 비밀번호',
  check_new_password: '새 비밀번호 확인',
};

export interface IProps extends JDmodalConfigProps {
  langs?: Partial<TPasswordReseterLangs>;
  requireField?: {
    password?: boolean;
    email?: boolean;
  };
  startChangeCallBack: (param: ChangeStartCallBackParam) => void;
  completeChangeCallBack: (param: CompleteCallBackParam) => void;
  modalHook: IUseModal;
}

export const PasswordFinder: React.FC<IProps> = ({
  langs = DEFAULT_LANGS,
  startChangeCallBack,
  completeChangeCallBack,
  modalHook,
  requireField,
  ...props
}) => {
  langs = {
    ...DEFAULT_LANGS,
    ...langs,
  };
  const emailHook = useInput('');
  const phoneNumberHook = useInput('');
  const keyHook = useInput('');
  const newPasswordHook = useInput('');
  const newConfimPasswordHook = useInput('');
  const [passwordLevelViewer, setPasswordLevelViewer] = useState<TCheck>({
    enAndNumber: false,
    length: false,
    special: false,
    checkedCount: 0,
  });

  const verifyValidate = () => {
    if (!isPhone(phoneNumberHook.value)) {
      toast.warn(langs['not_a_valid_phoneNumber']);
      $('#veriEmialInput').focus();
      return false;
    }
    if (requireField?.email && !isEmail(emailHook.value)) {
      toast.warn(langs['not_a_valid_email']);
      $('#veriPhoneInput').focus();
      return false;
    }
    return true;
  };

  const validate = () => {
    if (
      requireField?.password &&
      newPasswordHook.value !== newConfimPasswordHook.value
    ) {
      toast.warn(langs['password_is_not_matched']);
      return false;
    }
    return true;
  };

  return (
    <JDmodal
      head={{
        title: langs['password_rewrite'],
      }}
      foot={
        <Button
          mode="flat"
          onClick={() => {
            if (validate()) {
              completeChangeCallBack({
                email: emailHook.value,
                key: keyHook.value,
                newPassword: newPasswordHook.value,
                newPasswordRe: newConfimPasswordHook.value,
                phoneNumber: phoneNumberHook.value,
              });
            }
          }}
          thema="primary"
          label={langs['confirm']}
        />
      }
      {...modalHook}
      {...props}
    >
      {requireField?.email && (
        <div>
          <InputText
            id="veriEmialInput"
            label={langs['eamil']}
            {...emailHook}
          />
        </div>
      )}
      <Align flex>
        <InputText
          id="veriPhoneInput"
          hyphen
          label={langs['phoneNumber']}
          {...phoneNumberHook}
        />
        <Button
          style={{
            alignSelf: 'flex-end',
          }}
          onClick={() => {
            if (verifyValidate()) {
              startChangeCallBack({
                email: emailHook.value,
                phoneNumber: phoneNumberHook.value,
              });
            }
          }}
          mode="border"
          thema="primary"
          label={langs['authenticate']}
        />
      </Align>
      <div>
        <InputText label={langs['certification_number']} {...keyHook} />
      </div>

      {requireField?.password && (
        <div>
          <div>
            <InputText
              label={langs['new_password']}
              type="password"
              {...newPasswordHook}
            />
          </div>
          <SecurityLevelViewer
            passwordCondition={passwordLevelViewer}
            setPasswordCondition={setPasswordLevelViewer}
            password={newPasswordHook.value}
          />
          <div className="JDsmall-text JDstandard-margin-bottom"></div>
          <div>
            <InputText
              label={langs['check_new_password']}
              type="password"
              {...newConfimPasswordHook}
            />
          </div>
        </div>
      )}
    </JDmodal>
  );
};

export default PasswordFinder;
