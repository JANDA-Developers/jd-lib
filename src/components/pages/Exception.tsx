import React from 'react';
import JDbutton, { IButtonProps } from '../button/Button';
import { IDiv } from '../../types/interface';

type TExceptionKey = '404' | 'expire' | 'deny';

type TExceptionTemplate = {
  title?: string;
  text?: string;
  img?: string;
};

export interface IProps extends IDiv, TExceptionTemplate {
  button?: IButtonProps;
  type?: TExceptionKey;
}

type TDfeaultList = {
  [key: string]: TExceptionTemplate;
};

const default_list: TDfeaultList = {
  '404': {
    img:
      'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/nopage.png',
    text: '페이지를 찾을 수 없습니다. 뒤로가기를 눌러주세요.',
    title: '페이지를 찾을 수 없습니다.',
  },
  expire: {
    img:
      'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/expire.png',
    text: '상품이 만료되었습니다. JANDA측에 문의 바랍니다.',
    title: '상품이 만료되었습니다.',
  },
  deny: {
    img:
      'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/warn-triangle.png',
    text: '해당 페이지에 접근권한이 없습니다.',
    title: '접근금지',
  },
};

export const Exception: React.FC<IProps> = ({
  button: buttonProp,
  img,
  text,
  title,
  type,
  ...props
}) => {
  const defaultSet = default_list[type || ''];
  const { img: Img, text: Text, title: Title } = defaultSet || {
    img,
    text,
    title,
  };

  return (
    <div className={'exception'} {...props}>
      <img className={'exception__img'} src={Img} />
      <h1 className={'exception__title'}>{Title}</h1>
      <p className={'exception__desc'}>{Text}</p>
      <JDbutton
        className={'exception__input'}
        label="Back to Home"
        {...buttonProp}
      />
    </div>
  );
};

export default Exception;
