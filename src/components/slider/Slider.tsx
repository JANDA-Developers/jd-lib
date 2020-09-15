import React, { Fragment } from 'react';
import Slider, { Settings } from 'react-slick';
import Icon from '../icons/Icons';
import classnames from 'classnames';
import { IDiv, JDatomExtentionSet } from '../../types/interface';
import { JDmbClass, JDmrClass } from '../../utils/autoClasses';

interface IProps extends Settings, JDatomExtentionSet {
  /** 아이콘을 출력함*/
  whiteIcon?: boolean;
  /** 화살표를 출력함*/
  displayArrow?: boolean;
  condition?: boolean;
}

export type TJDsliderProp = IProps & IDiv;

export const JDSlider: React.FC<TJDsliderProp> = ({
  children,
  whiteIcon,
  condition = true,
  displayArrow = true,
  className,
  mb,
  mr,
  ...props
}) => {
  const JDslideDefaultSettings = {
    className: 'JDslider',
    dotsClass: 'JDslider__dots',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slideCount: 1,
    nextArrow: displayArrow ? (
      <Icon
        icon="arrowRight"
        style={{
          transform: 'scale(-1)',
        }}
        size="small"
        className="JDslider__arrow--left"
      />
    ) : (
      undefined
    ),
    prevArrow: displayArrow ? (
      <Icon className="JDslider__arrow--right" size="small" icon="arrowRight" />
    ) : (
      undefined
    ),
  };

  const classes = classnames(JDslideDefaultSettings.className, className, {
    'JDslider--unDisplayArrow': displayArrow === false,
    ...JDmbClass(mb),
    ...JDmrClass(mr),
  });

  JDslideDefaultSettings.className = classes;

  if (!condition) return <Fragment>{children}</Fragment>;

  return (
    <Slider {...JDslideDefaultSettings} {...props}>
      {children}
    </Slider>
  );
};

export const Slide: React.FC = ({ children }) => (
  <div className="JDslider__slide-wrap">
    <div className="JDslider__slide">{children}</div>
  </div>
);

export default JDSlider;
