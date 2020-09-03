import React from "react";

interface IProps {
  s: string;
}

const Test: React.FC<IProps> = ({ s }) => {
  return <div>{s}</div>;
};

export default Test;
