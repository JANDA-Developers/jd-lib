import React from "react";
import Radios from "../src/components/radio/Radio";
import JDcontainer from "../src/components/container/Container";
import { useRadio } from "../src/hooks/hook";

export const standard = () => {
  const radioHook = useRadio([
    { key: "radio1", label: "바나나", value: "banana" },
    { key: "radio2", label: "딸기", value: "strawberry" },
    { key: "radio3", label: "사과", value: "apple" },
  ]);

  return (
    <JDcontainer verticalPadding>
      <Radios {...radioHook} />
    </JDcontainer>
  );
};

export default {
  title: "Radio",
  component: standard,
};

standard.story = {
  name: "standard",
};
