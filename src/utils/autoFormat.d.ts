import { Moment } from "moment-timezone";
declare const cardExpToObj: (period?: string) => {
    month: string;
    year: string;
};
declare function capitalizeFirstLetter(string?: string): string;
declare const cardExpire: (period?: string) => string;
declare const card_space: (value?: string) => string;
declare const autoHypenPhone: (str?: string) => string;
declare const autoComma: (str?: string | number) => string;
declare const numberStr: (str?: string) => string;
declare const toNumber: (value?: string | number) => number;
export default autoHypenPhone;
export { cardExpToObj, autoComma, capitalizeFirstLetter, numberStr, cardExpire, toNumber, card_space, };
export declare const removeSpecialChar: (str: string) => string;
export declare const removeSpecial: (str: string) => string;
declare type TDate = Date | Moment | number | string;
export declare const dateRangeFormat: (from: TDate, to: TDate, format?: string | undefined) => string;
