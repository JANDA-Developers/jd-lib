import React from "react";
import { IUseDayPicker } from "../../hooks/hook";
import { JDatomExtentionSet, IDiv, TElements } from "../../types/interface";
import { JDColor } from "../..";
export interface TDayPickerDot extends IDiv {
    tooltip?: string;
    color: JDColor;
    date: Date;
}
export interface IJDdayPickerProps extends IUseDayPicker, JDatomExtentionSet {
    canSelectBeforeDay?: boolean;
    placeholder?: string;
    mode?: "horizen" | "input" | "checkInOutStyle";
    label?: string;
    readOnly?: boolean;
    isRange?: boolean;
    displayYear?: boolean;
    canSelectSameDate?: boolean;
    format?: string;
    lang?: string;
    dots?: TDayPickerDot[];
    displayIcon?: boolean;
    inputDisabled?: boolean;
    maxLimit?: boolean;
    showWeekEndColor?: boolean;
    inputComponent?: any;
    onChangeDate?(foo?: string | Date | null, foo2?: string | Date | null): void;
    className?: string;
    inputClassName?: string;
    calenaderPosition?: "left" | "right" | "center";
    displayCaption?: boolean;
    displayHeader?: boolean;
    currentLang?: "kr" | "en";
    Information?: TElements;
}
declare const JDdayPicker: React.FC<IJDdayPickerProps>;
export default JDdayPicker;
