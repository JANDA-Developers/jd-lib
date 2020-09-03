import { JDpageInfo, TP } from "../types/interface";
declare function queryDataFormater<T, K extends keyof T, C extends keyof T[K], D>(data: T | undefined, queryName: K, dataName: C | undefined, falsyReturn: D): C extends undefined ? T[K] | D : T[K][C] | D;
interface ResultWithPaging<T, K extends keyof T, D> {
    data: T[K] | D;
    pageInfo: JDpageInfo;
}
declare function getFromResult<T, K extends keyof T, D>(result: (T & TP) | undefined | null, dataKey: K, falsyData: D): ResultWithPaging<T, K, D>;
export { getFromResult };
export default queryDataFormater;
