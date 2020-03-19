/* --------------------------------- NAV_BAR --------------------------------- */
// http://react-day-picker.js.org/examples/elements-navbar
import React from "react";
import PropTypes from "prop-types";
import Button from "../../button/Button";

const JDMonthTextChanger = (Month: string | number): string => {
  if (Month === "December" || Month === 11) return "12";
  if (Month === "November" || Month === 10) return "11";
  if (Month === "October" || Month === 9) return "10";
  if (Month === "September" || Month === 8) return "9";
  if (Month === "August" || Month === 7) return "8";
  if (Month === "July" || Month === 6) return "7";
  if (Month === "June" || Month === 5) return "6";
  if (Month === "May" || Month === 4) return "5";
  if (Month === "April" || Month === 3) return "4";
  if (Month === "March" || Month === 2) return "3";
  if (Month === "February" || Month === 1) return "2";
  if (Month === "January" || Month === 0) return "1";
  console.error("JDMonthTextChanger Month is not 0~11");
  return "";
};

const Navbar = ({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  className,
  localeUtils
}: any) => {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];

  return (
    <div className={className}>
      <Button
        size="small"
        className={"DayPicker__navbtns--left"}
        label={JDMonthTextChanger(prev)}
        iconProp={{
          style: {
            transform: "scale(-1)"
          },
          icon: "arrowRight",
          size: "small"
        }}
        mode="flat"
        float="left"
        iconClasses={["JDbtn__icon--left"]}
        onClick={() => onPreviousClick()}
      />
      <Button
        size="small"
        className="DayPicker__navbtns--right"
        label={JDMonthTextChanger(next)}
        iconProp={{
          icon: "arrowRight",
          size: "small"
        }}
        mode="flat"
        float="right"
        onClick={() => onNextClick()}
      />
    </div>
  );
};

Navbar.propTypes = {
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  nextMonth: PropTypes.instanceOf(Date),
  previousMonth: PropTypes.instanceOf(Date),
  className: PropTypes.string,
  localeUtils: PropTypes.object
};

Navbar.defaultProps = {
  onPreviousClick: () => {},
  onNextClick: () => {},
  nextMonth: new Date(),
  previousMonth: new Date(),
  className: "",
  localeUtils: {}
};

export default Navbar;
