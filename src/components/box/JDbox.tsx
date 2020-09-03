import React from "react";
import { IDiv } from "../../types/interface";

interface IProps extends IDiv {}

const JDbox: React.FC<IProps> = ({ children }) => {
  return <div className="JDbox">{children}</div>;
};

export default JDbox;
