import React, { Fragment } from "react";
import { TDayPickerDot } from "../DayPicker";
import moment from "moment-timezone";
import { isEmpty } from "../../../utils/utils";
import { IDiv } from "../../../types/interface";
import classNames from "classnames";
import { bgColorClass } from "../../../utils/autoClasses";
import Tooltip from "../../tooltip/Tooltip";
interface IProps extends IDiv {
  dot: TDayPickerDot;
}

export const DayPickerDot: React.FC<IProps> = ({ dot, ...props }) => {
  const classes = classNames("DayPicker-Day__dot", dot.className, {
    ...bgColorClass(dot.color)
  });
  return <div className={classes} {...props} />;
};

export const DayPickerDay = (dots: TDayPickerDot[], date: Date, props: any) => {
  const targetDots = dots.filter(d => moment(d.date).isSame(date, "d"));

  return (
    <span {...props} start={undefined} today={undefined} end={undefined}>
      {moment(date).format("DD")}
      {isEmpty(targetDots) || (
        <div className="DayPicker-Day__dotsWrap">
          {targetDots.map(dot => (
            <Fragment key={dot.date.valueOf()}>
              <DayPickerDot
                onClick={() => {}}
                data-tip={dot.tooltip ? true : undefined}
                data-for={
                  dot.tooltip ? `dotTooltip${date.valueOf()}` : undefined
                }
                dot={dot}
              />
              {dot.tooltip && (
                <Tooltip
                  type="dark"
                  effect="solid"
                  id={`dotTooltip${date.valueOf()}`}
                >
                  <span>{dot.tooltip}</span>
                </Tooltip>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </span>
  );
};

export default DayPickerDay;
