import React from "react";
import { IDiv, JDatomExtentionSet } from "../../types/interface";
import classNames from 'classnames';
import { JDatomClasses } from '../..';

interface IProps extends IDiv, JDatomExtentionSet {
  hover?: boolean;
}

const JDbox: React.FC<IProps> = ({ children, className, hover, ...prop }) => {

  const classes = classNames('JDbox', className, {
    ...JDatomClasses(prop),
    "JDhover": hover
  })
  return <div className={classes}>{children}</div>;
};

export default JDbox;
