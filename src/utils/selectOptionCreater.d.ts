import { IselectedOption } from "../types/interface";
interface IProps {
    count: number;
    start?: number;
    labelAdd?: string;
}
declare const selectOpCreater: ({ count, labelAdd, start }: IProps) => IselectedOption<number>[];
export default selectOpCreater;
