/// <reference types="react" />
export declare const isIncludeKr: (str: string | null) => boolean;
declare type TResult = {
    error: string | null;
    ok: boolean | null;
    [data: string]: any;
};
declare const onCompletedMessage: (result: TResult, resultOK: string, resultFale: string | undefined, SystemFalse?: string | JSX.Element | JSX.Element[] | string[] | undefined, queryName?: string | undefined) => void;
export default onCompletedMessage;
