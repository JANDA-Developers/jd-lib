import React, { useState, useEffect } from 'react';
import { isHaveNumber, isLengthIn, isHaveScharacter } from '../../utils/utils';
import { password_condition } from './SecurityLevelViewer';

interface Iprops {
  txt: string;
}

const PasswordChecker: React.FC<Iprops> = ({ txt }) => {
  const [passwordCondition, setPasswordCondition] = useState({
    special: false,
    length: false,
    enAndNumber: false,
  });

  useEffect(() => {
    setPasswordCondition({
      enAndNumber: isHaveNumber(txt),
      length: isLengthIn(txt, 15, 7),
      special: isHaveScharacter(txt),
    });
  }, [txt]);

  return (
    <span>
      {password_condition(
        passwordCondition.special,
        passwordCondition.length,
        passwordCondition.enAndNumber
      )}
    </span>
  );
};

export default PasswordChecker;
