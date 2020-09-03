/// <reference types="react" />
import PropTypes from "prop-types";
interface IProp {
    txt: string | JSX.Element;
    className?: string;
}
declare const JDLabel: {
    ({ txt, className }: IProp): JSX.Element;
    propTypes: {
        txt: PropTypes.Validator<string>;
    };
};
export default JDLabel;
