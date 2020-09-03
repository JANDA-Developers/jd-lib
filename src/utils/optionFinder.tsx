import { IselectedOption } from "../types/interface";

//
const optionFineder = (
  options: IselectedOption[],
  value: any
): IselectedOption => {
  const targetOp = options.find(op => op.value === value);
  if (!targetOp) {
    return { value: "", label: "Select" };
  }
  return targetOp;
};

export const optionFineders = (
  options: IselectedOption[],
  values: any[]
): IselectedOption[] => {
  const targetOp = options.filter(op => values.includes(op.value));
  if (!targetOp) {
    return [{ value: "", label: "Select" }];
  }
  return targetOp;
};

export default optionFineder;
