import React from 'react';
import { ISpan, JDatomExtentionSet } from '../../types/interface';
import classnames from 'classnames';
import { JDColor, TextSize } from '../../types/enum';
import { JDatomClasses } from '../../utils/utils';
// import { textColorClass } from "@janda-com/front/dist/utils/autoClasses";

interface Iprops extends ISpan, JDatomExtentionSet {
  color?: JDColor;
  size?: TextSize;
  anchor?: boolean;
}

const TextButton: React.FC<Iprops> = ({
  anchor,
  size,
  color,
  className,
  ...props
}) => {
  const classNames = classnames('textButton', className, {
    'textButton--anchor': anchor,
    ...JDatomClasses(props),
  });

  return <span className={classNames} {...props} />;
};

export default TextButton;
