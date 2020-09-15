import React from 'react';

interface IProps {}

const LoginText: React.FC<IProps> = ({}) => {
  return (
    <span
      style={{
        fontSize: '2em',
        fontFamily: 'NanumSquare',
      }}
    >
      LOGIN
    </span>
  );
};

export default LoginText;
