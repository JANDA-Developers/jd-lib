import React, { useEffect } from "react";
import classNames from "classnames";
import { IDiv } from "../../types/interface";
import { isHaveNumber, isLengthIn, isHaveScharacter } from "../../utils/utils";
import JDtypho from "../typho/Typho";
import JDalign from "../align/Align"
import JDIcon from '../icons/Icons';

export type TCheck = {
    special: boolean;
    length: boolean;
    enAndNumber: boolean;
    checkedCount?: number;
};

export interface IProps extends IDiv {
    password: String;
    passwordCondition: TCheck;
    setPasswordCondition: React.Dispatch<React.SetStateAction<TCheck>>;
}

const ResultValidate = (fillCount: number) => {
    if (fillCount === 0) {
        return "아주약함";
    }
    if (fillCount === 1) {
        return "약함";
    }
    if (fillCount === 2) {
        return "사용가능";
    }
    if (fillCount === 3) {
        return "안전";
    }
    return ""
}

const SecurityText = (special: any, length: any, enAndNumber: any): any =>
    <span>
        <JDtypho color={special && "positive"}>
            특수문자 1개이상
      </JDtypho>
        <JDtypho color={length && "positive"}>7~15자리</JDtypho>
        <JDtypho color={enAndNumber && "positive"}>
            영문 숫자 조합
      </JDtypho>
    </span>

export const SecurityLevelViewer: React.FC<IProps> = ({
    password,
    passwordCondition,
    setPasswordCondition,
    ...props
}) => {
    let maxCount = 3;
    let fillCount = 0;

    if (passwordCondition.enAndNumber) fillCount++;
    if (passwordCondition.length) fillCount++;
    if (passwordCondition.special) fillCount++;

    useEffect(() => {
        setPasswordCondition({
            enAndNumber: isHaveNumber(password),
            length: isLengthIn(password, 15, 7),
            special: isHaveScharacter(password),
            checkedCount: fillCount,
        });
    }, [password]);

    const classes = classNames("securityBar", undefined, {
        "securityBar--red": fillCount === 1,
        "securityBar--orange": fillCount === 2,
        "securityBar--green": fillCount === 3,
    });

    let color: any = "grey";
    if (fillCount === 1) {
        color = "error";
    }
    if (fillCount === 2) {
        color = "warn";
    }
    if (fillCount === 3) {
        color = "positive";
    }

    return (
        <span {...props}>
            <div className={classes}>
                {Array(maxCount)
                    .fill(null)
                    .map((_, i) => (
                        <span
                            className={`securityBar__block ${
                                i < fillCount && "securityBar__block--fill"
                                }`}
                        ></span>
                    ))}
            </div>
            <JDalign
                style={{
                    justifyContent: "flex-end",
                }}
                flex={{
                    vCenter: true,
                }}
            >
                <JDtypho mr="small" color={color} size="small">
                    {ResultValidate(fillCount)}
                </JDtypho>
                <JDIcon
                    color="primary"
                    icon="question"
                    tooltip={SecurityText(
                        passwordCondition.special,
                        passwordCondition.length,
                        passwordCondition.enAndNumber
                    )}
                />
            </JDalign>
        </span>
    );
};

export default SecurityLevelViewer;
