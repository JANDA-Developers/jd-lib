import React, { useEffect } from 'react';
import { IUseDropDown } from '../../hooks/hook';
import $ from 'jquery';
import JDtypho from '../typho/Typho';
import { TElements, IDiv } from '../../types/interface';
import classNames from 'classnames';
import { WindowSizeNumber } from '../../types/enum';
import { useWindowSize } from '../../hooks/hook';

export interface IProp<T = any> extends IUseDropDown<T>, IDiv {
  /** 드랍다운에 나타날 버튼들 모음*/
  Buttons?: (info: T) => TElements[];
  /** mixed: 모바일일때만 바텀에 부착 fixed:마우스 누른곳에 위치 floatBottom: 항상 아래에 위치*/
  mode?: 'mixed' | 'fixed' | 'floatBottom';
  /** mixed: 모바일일때만 바텀에 부착 fixed:마우스 누른곳에 위치 floatBottom: 항상 아래에 위치*/
  position?: 'absolute' | 'fixed';
  // preventScroll: Node[];
  /** 드랍다운이 된 상태에서는 마우스휠 금지*/
  preventWindowScroll?: boolean;
  /** 윈도우 클릭으로 드랍박스 끄기*/
  closeOnWindowClick?: boolean;
  /** 헤드 UI 조정*/
  head?: {
    title?: string;
    onlyMobile?: boolean;
    element?: TElements;
  };
  /**  mode가 mixed일떄 바텀 모드로 전환할 윈도우 사이즈 */
  changePoint?: number;
}

export const DropDown: React.FC<IProp> = ({
  mode = 'mixed',
  className,
  info,
  close,
  isOpen,
  offset,
  head,
  children,
  Buttons,
  position,
  closeOnWindowClick,
  preventWindowScroll,
  changePoint = WindowSizeNumber.PHABLET,
}) => {
  const { width } = useWindowSize();
  const isBottom =
    mode === 'floatBottom' || (mode === 'mixed' && width <= changePoint);


  const classes = classNames('dropDown', className, {
    'dropDown--open': isOpen,
    'dropDown--floatBottom': isBottom,
    'dropDown--flxed':
      mode === 'fixed' || (mode === 'mixed' && width > changePoint),
  });

  useEffect(() => {
    if (preventWindowScroll) {
      const SCROLLPOS = $(window).scrollTop();

      const touchMove = () => {
        $(window).trigger('scroll');
      };
      const scroll = () => {
        $(window).scrollTop(SCROLLPOS || 0);
      };

      const enableScroll = () => {
        $(window).unbind('scroll', scroll);
        $(window).unbind('touchMove', touchMove);
      };

      $(function () {
        $(window).bind('scroll', scroll);
        $(window).bind('touchmove', touchMove);
      });

      if (!isOpen) enableScroll();

      return () => {
        enableScroll();
      };
    }
    return () => { };
  }, [isOpen]);

  useEffect(() => {
    const click = () => {
      close();
    };

    if (closeOnWindowClick) {
      window.addEventListener('click', click);
      window.addEventListener('touchend', click);
    }
    return () => {
      window.removeEventListener('click', click);
      window.removeEventListener('touchend', click);
    };
  }, []);

  return (
    <div onClick={e => {
      e.stopPropagation()
    }} style={{ ...offset, position: position }} className={classes}>
      {head && (
        <div
          className={`dropDown__head ${head.onlyMobile &&
            'dropDown__head--onlyMobile'}`}
        >
          <JDtypho color="black">
            {head.title}
            {head.element}
          </JDtypho>
        </div>
      )}
      {children}
      {Buttons ? Buttons(info) : null}
    </div>
  );
};

export default DropDown;
