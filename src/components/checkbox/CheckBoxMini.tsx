import React from 'react';
import classNames from 'classnames';
import { IDiv } from '../../types/interface';

interface IProps extends IDiv {
  checked: boolean;
  onChange: any;
}

const CheckBoxMini: React.FC<IProps> = ({ checked, className, onChange }) => {
  const classes = classNames('checkBoxMini', className, {
    'checkBoxMini--checked': checked,
  });

  const onHandleClick = () => {
    if (checked !== undefined && onChange) {
      const flag = !checked;
      onChange(flag || false);
    }
  };

  return (
    <div onClick={onHandleClick} className={classes}>
      {checked && '✓'}
    </div>
  );
};

export default CheckBoxMini;
