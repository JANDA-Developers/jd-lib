/**  배열 또는 오브젝트가 또는 스트링이 비어 있는지 검사합니다..  */
declare const isEmpty: (data: any) => data is void | "" | null | undefined;
export default isEmpty;
