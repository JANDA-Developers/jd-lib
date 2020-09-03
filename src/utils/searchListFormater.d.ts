declare const searchListCreater: (dataList: any[], asName?: string | undefined, asDetail?: string | undefined, asId?: string | undefined) => {
    name: string;
    detail?: string | undefined;
}[];
export default searchListCreater;
