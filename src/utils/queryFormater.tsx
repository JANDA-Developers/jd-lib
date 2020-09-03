import isEmpty from "./isEmptyData";
import { DEFAULT_PAGE_INFO } from "../types/defaults";
import { JDpageInfo, TP } from "../types/interface";

function queryDataFormater<T, K extends keyof T, C extends keyof T[K], D>(
  data: T | undefined,
  queryName: K,
  dataName: C | undefined,
  falsyReturn: D
): C extends undefined ? T[K] | D : T[K][C] | D {
  if (isEmpty(data) || isEmpty(data[queryName])) return falsyReturn as any;

  let inData: any = data[queryName];

  const { error } = inData;

  if (error) {
    return falsyReturn as any;
  }

  if (dataName && inData[dataName]) return inData[dataName];

  return inData;
}

interface ResultWithPaging<T, K extends keyof T, D> {
  data: T[K] | D;
  pageInfo: JDpageInfo;
}

// this is used for pagination
function getFromResult<T, K extends keyof T, D>(
  result: (T & TP) | undefined | null,
  dataKey: K,
  falsyData: D
): ResultWithPaging<T, K, D> {
  if (isEmpty(result)) {
    return {
      data: falsyData,
      pageInfo: DEFAULT_PAGE_INFO
    };
  }
  if (isEmpty(result[dataKey])) {
    return {
      data: falsyData,
      pageInfo: DEFAULT_PAGE_INFO
    };
  }

  return {
    data: result[dataKey],
    pageInfo: result["pageInfo"]
  };
  // console.error('queryDataFormater: EMPTY DATA');
}

export { getFromResult };
export default queryDataFormater;
