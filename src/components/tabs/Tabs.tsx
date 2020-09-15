import React from 'react';
import classNames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { JDatomClasses } from '../../utils/autoClasses';
import { JDatomExtentionSet } from '../../types/interface';

export interface IProps extends JDatomExtentionSet {
  styleMode?: 'button';
  className?: string;
  defaultFocus?: boolean;
  defaultIndex?: number;
  tabsAlign?: 'spaceAround' | 'spaceBetween' | 'full';
  disabledTabClassName?: string;
  domRef?: (node?: HTMLElement) => void;
  forceRenderTabPanel?: boolean;
  onSelect?: (index: number, last: number, event: Event) => boolean | void;
  selectedIndex?: number;
  selectedTabClassName?: string;
  selectedTabPanelClassName?: string;
  breakTabs?: boolean;
}

const JDtabs: React.FC<IProps> = ({
  breakTabs,
  tabsAlign,
  styleMode,
  className,
  ...props
}) => {
  const classes = classNames('JDtabs', className, {
    'JDtabs--style_button': styleMode === 'button',
    'JDtabs--normal': !styleMode,
    'JDtabs--tabsAlign-spaceAround': tabsAlign === 'spaceAround',
    'JDtabs--tabsAlign-spaceBetween': tabsAlign === 'spaceBetween',
    'JDtabs--tabsAlign-normal': tabsAlign === undefined,
    'JDtabs--tabsAlign-full': tabsAlign === 'full',
    ...JDatomClasses(props),
  });

  const Ch: any = props.children;

  if (breakTabs) return Ch;

  return <Tabs {...props} className={classes} />;
};

export { Tab, JDtabs, TabList, TabPanel };
