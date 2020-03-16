/* --------------------------------- NAV_BAR --------------------------------- */
// http://react-day-picker.js.org/examples/elements-navbar
import React from "react";
import PropTypes from "prop-types";
import Button from "../../button/Button";

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
        label={prev}
        icon="arrowRight"
        mode="flat"
        float="left"
        iconClasses={["JDbtn__icon--left"]}
        onClick={() => onPreviousClick()}
      />
      <Button
        size="small"
        className="DayPicker__navbtns--right"
        label={next}
        icon="arrowRight"
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
