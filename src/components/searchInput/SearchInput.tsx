import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { InputText, IInputTextCutsomProp } from '../InputText/InputText';
import DataModal, { IDateModalProps } from './DataModal';
import $ from 'jquery';
import { JDatomExtentionSet, TElements } from '../../types/interface';
import { JDatomClasses } from '../../utils/utils';
import { parentScrollMoveToElement } from '../../utils/parentScroll';

export type TSearchComponentProp = {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onFocus: () => void;
  value: string;
  onChange: (v: any) => void;
}

export interface IJDsearchInputProp
  extends IDateModalProps,
  JDatomExtentionSet {
  searchValue: string;
  onSearchChange: (v: any) => void;
  inputProp?: IInputTextCutsomProp & React.AllHTMLAttributes<HTMLInputElement>;
  loading?: boolean;
  maxModalBodyHeight?: number;
  // 미구현
  enterBehavior?: 'scroll' | 'submit';
  filterBySearch?: boolean;
  sortBySmiliarity?: boolean;
  focuseOutAfterSelect?: boolean;
  SearchComponent?: (prop: TSearchComponentProp) => TElements
}


// 이 컴포넌트는 검색하여 리스트를 보여주는것을 목적으로 합니다.

export const SearchInput: React.FC<IJDsearchInputProp> = ({
  /** 검색 가능한 데이터 리스트. */
  dataList,
  /** 검색이 바뀌었을떄. */
  onSearchChange,
  /** 검색 밸류. */
  searchValue,
  /** 데이터를 선택했을때. */
  onSelectData,
  /** . */
  className,
  /** InputText의 Property */
  inputProp,
  /** 로딩중에는 Data모달을 업데이트 하지않습니다. => 덜렁거림방지 */
  /** 로딩 */
  loading,
  /** 헤드 UI */
  head,
  /** 바텀 UI */
  foot,
  /** 언어 설정 */
  langs,
  /** Enter 키로 할 행동정의 scroll이면 해당 까지 Scroll만 진행 */
  enterBehavior = 'scroll',
  /** Data Modal의 높이지정 */
  maxModalBodyHeight = 300,
  /** 선택후 포커스 아웃 시킬지 결정 */
  focuseOutAfterSelect,
  /** 커스텀 서치 인풋 */
  SearchComponent,
  ...prop
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const ulRef = useRef<HTMLDivElement>(null);
  const classes = classNames('JDsearchInput', className, {
    ...JDatomClasses(prop),
  });

  const autoScrollList = (target: HTMLElement) => {
    const height = $(target).height() || 0;
    $(target)
      .parent()
      .scrollTop(target.offsetTop - height);
  };

  const addClass = (target: JQuery<HTMLDivElement>) => {
    if (!target.get(0)) return;
    target.addClass('dataModal__li--selected');
    autoScrollList(target.get(0));
  };

  // Handler - input : onKeyPress
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!ulRef?.current?.children) return;

    // CASE: 엔터를 쳤을경우에
    if (e.key === 'Enter') {
      e.preventDefault();
      if (enterBehavior === 'scroll') {
        const hilgihts = $('.dataModal__hilight');
        const hilightNode = hilgihts.not('.dataModal__hilight--checked').get(0);
        if (hilightNode) {
          hilgihts.removeClass('dataModal__hilight--current');
          $(hilightNode).addClass('dataModal__hilight--checked');
          $(hilightNode).addClass('dataModal__hilight--current');
          parentScrollMoveToElement(hilightNode, {
            top: -90,
          });
        } else {
          hilgihts.removeClass('dataModal__hilight--checked');
        }
      } else if (enterBehavior === 'submit') {
        const selectedNode = $(ulRef.current).find('.dataModal__li--selected');

        if (selectedNode) {
          const id = selectedNode.attr('id');
          const targetData = dataList?.find(d => d.id === id);
          if (targetData) onSelectData(targetData);
        }
      }
    }

    // ⌨️ 키보드 위아래로 움직일경우에 노드 선택
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const selectClass = 'dataModal__li--selected';
      const selectedNodes = $(ulRef.current).children('.' + selectClass);
      const selectedNode = selectedNodes[0];
      selectedNodes.removeClass(selectClass);
      // CASE: 선택되면
      if (selectedNode) {
        // active select
        if (e.key === 'ArrowUp') {
          const target = $(selectedNode).prev();
          addClass(target);
        } else {
          const target = $(selectedNode).next();
          addClass(target);
        }
      } else if (e.key === 'ArrowDown') {
        ulRef.current.children[0].classList.add('dataModal__li--selected');
      }
    }
  };

  const searchInputProp = {
    onKeyDown: handleOnKeyPress,
    onBlur: () => { setModalVisible(false) },
    onFocus: () => {
      setModalVisible(true);
    },
    value: searchValue,
    onChange: onSearchChange
  }

  return (
    <div className={classes}>
      {SearchComponent?.(searchInputProp) || <InputText
        {...prop}
        {...searchInputProp}
        icon="magnifier"
        {...inputProp}
      />}
      <DataModal
        className={modalVisible ? 'dataModal--visible' : undefined}
        ref={ulRef}
        maxModalBodyHeight={maxModalBodyHeight}
        onSelectData={onSelectData}
        langs={langs}
        foot={foot}
        head={head}
        loading={loading}
        dataList={dataList}
        value={searchValue}
      />
    </div>
  );
};

export default SearchInput;
