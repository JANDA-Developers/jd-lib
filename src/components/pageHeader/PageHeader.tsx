import React from 'react';
import { IDiv } from '../../types/interface';

interface Iprops extends IDiv {
  title?: string;
  desc?: string | JSX.Element;
}

const JDpageHeader: React.FC<Iprops> = ({
  title,
  desc,
  ...props
}) => {
  return (
    <div className="JDpageHeader" {...props}>
      <h3 className="JDpageHeader__title">
        <b>{title}</b>
      </h3>
      <span className="JDpageHeader__desc">{desc}</span>
    </div>
  );
};

export default JDpageHeader;
