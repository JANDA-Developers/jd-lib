import classNames from 'classnames';
import React, { useState } from 'react';
import { IDiv, JDatomExtentionSet, TElements } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';
import JDIcon from '../icons/Icons';
import JDbadge, { IJDbadge } from '../badge/Badge';

interface ICardPart extends IDiv {
  mode?: 'fit';
  element?: TElements;
}

interface IBookMark extends IDiv {
  activate?: boolean;
  decoColor?: string;
}

interface IProps extends IDiv {
  children?: JSX.Element[] | JSX.Element | string;
  /**  마우스 오버 이펙트가 가능하면 true. */
  hover?: boolean;
  /**  카드에 뱃지를 달아줍니다. */
  badges?: IJDbadge[];
  toogleCard?: boolean;
  onToogleCardClick?: () => any;
  /**  Defrecate 예정 */
  fullHeight?: boolean;
  /**  선택 이펙트  --selected 수정자 클래스를 붙임 */
  selected?: boolean;
  /**  Defrecate 예정 */
  fullWidth?: boolean;
  /**  정렬 업데이트 예정 */
  align?: 'center';
  /**  마진 제거 */
  noMargin?: boolean;
  /**  바닥에 패딩 없이 부착 */
  foot?: ICardPart;
  head?: ICardPart;
  padding?: "small"
  bookMarks?: IBookMark[];
  /**  클릭시 이펙트 */
  onClickCard?(): void;
  mode?: 'border' | 'normal'
}

export interface CardProps extends IProps { }

export const JDcard: React.FC<IProps & JDatomExtentionSet> = ({
  children,
  hover,
  align,
  className,
  onClickCard,
  fullHeight,
  fullWidth,
  selected,
  toogleCard,
  onToogleCardClick,
  noMargin,
  foot,
  badges,
  mode,
  head,
  padding,
  bookMarks,
  ...props
}: IProps & JDatomExtentionSet) => {
  const [render, setRender] = useState(true);

  const classes = classNames('JDcard', className, {
    JDcard: true,
    'JDcard--withPart': foot || head,
    'JDcard--hover': hover,
    'JDcard--border': mode === "border",
    'JDcard--selected': selected,
    'JDcard--fullHeight': fullHeight,
    'JDcard--fullWidth': fullWidth,
    'JDcard--noMargin': noMargin,
    'JDcard--smPadding': padding === "small",
    'JDcard--bookMarks': bookMarks,
    'JDcard--center': align === 'center',
    ...JDatomClasses(props),
  });
  const footClasses = classNames('JDcard__foot', foot?.className, {
    'JDcard__foot--fit': foot?.mode === 'fit',
  });
  const headClasses = classNames('JDcard__head', head?.className, {
    'JDcard__head--fit': head?.mode === 'fit',
  });

  const handleClickCard = () => {
    onClickCard && onClickCard();
  };

  if (!render) {
    return <div />;
  }

  return (
    <div onClick={handleClickCard} {...props} className={classes}>
      {bookMarks && (
        <div className="JDcard__bookMarks">
          {bookMarks.map(({ children, activate, decoColor, ...props }, i) => (
            <div
              className={`JDcard__bookMark ${activate &&
                'JDcard__bookMark--active'}`}
              key={'bookMark' + (props.title || i)}
              {...props}
            >
              {decoColor && (
                <span
                  style={{
                    color: decoColor,
                  }}
                  className="JDcard__bookMarkDeco"
                />
              )}
              {children}
            </div>
          ))}
        </div>
      )}
      {head && <div className={headClasses}>
        <div className="JDcard__headContent">
          {head.title && <h6>{head.title}</h6>}
          {head.element}
          {head.children}
        </div>
      </div>}
      {toogleCard && (
        <span className="JDcard__clearIcon">
          <JDIcon
            onClick={() => {
              setRender(false);
              onToogleCardClick && onToogleCardClick();
            }}
            icon="close"
          />
        </span>
      )}
      <div className="JDcard__body">{children}</div>
      {foot && <div className={footClasses}>
        <div className="JDcard__footContent">
          {foot.element}
        </div>
      </div>}
      {badges && (
        <div className="JDcard__badges">
          {badges?.map((b, i) => (
            <JDbadge key={b.id || `badge${i}`} {...b} />
          ))}
        </div>
      )}
    </div>
  );
};

JDcard.defaultProps = {
  hover: false,
};

export default JDcard;
