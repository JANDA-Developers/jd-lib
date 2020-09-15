import React from 'react';
import Button from '../button/Button';
import { IDiv, JDatomExtentionSet, TElements } from '../../types/interface';
import classNames from 'classnames';
import { JDatomClasses } from '../../utils/autoClasses';
import { isEmpty } from '../../utils/utils';
import JDtypho from '../typho/Typho';

type Tlang = {
  enableHeader?: string;
  unableHeader?: string;
  /** 값을 언어에따라 바꾸는 함수를 제공하세요. */
  labelFn?: (key: TElements) => string;
};

export interface IConfigerProp extends IDiv, JDatomExtentionSet {
  /** 사용함 처리된 아이템들*/
  enableItems: string[];
  /** 모든 아이템들*/
  allItem: string[];
  /** 현재 사용함 처리의 아이템들이 변할떄마다 변환해줌 */
  onEnableChange: (enableItems: string[]) => any;
  /** 텍스트설정 */
  langs?: Tlang;
}

export const Configer: React.FC<IConfigerProp> = ({
  allItem,
  enableItems,
  onEnableChange,
  langs,
  className,
  mb,
  mr,
  hide,
}) => {
  const unEnableItems = allItem.filter(item => !enableItems.includes(item));

  const classes = classNames('configer', className, {
    ...JDatomClasses({
      hide,
      mb,
      mr,
    }),
  });

  const tempFn = (value: string) => value;
  const labelChanger = langs?.labelFn || tempFn;

  return (
    <div className={classes}>
      <div className="configer__enables">
        {langs?.enableHeader && (
          <div className="configer__head">{langs.enableHeader}</div>
        )}
        <div className="configer__body">
          {enableItems.map((value, i) => {
            return (
              <div
                onClick={() => {
                  const enableCopy = enableItems.slice();
                  enableCopy.splice(i, 1);
                  onEnableChange([...enableCopy]);
                }}
                className="configer__li"
                key={value + 'enalbe'}
              >
                {labelChanger(value)}
              </div>
            );
          })}
          {isEmpty(enableItems) && (
            <div>
              <JDtypho color="grey1">No Data</JDtypho>
            </div>
          )}
        </div>
      </div>
      <div className="configer__buttons">
        <div>
          <Button
            size="small"
            br="no"
            mode={['border', 'iconButton']}
            mb="small"
            iconProp={{
              size: 'small',
              icon: 'arrowRight',
            }}
            onClick={() => {
              onEnableChange([]);
            }}
          />
        </div>
        <div>
          <Button
            size="small"
            br="square"
            mode={['border', 'iconButton']}
            style={{
              transform: 'scale(-1)',
            }}
            onClick={() => {
              onEnableChange(allItem);
            }}
            mb="no"
            iconProp={{
              size: 'small',
              icon: 'arrowRight',
            }}
          />
        </div>
      </div>
      <div className="configer__unables">
        {langs?.unableHeader && (
          <div className="configer__head">{langs.unableHeader}</div>
        )}

        <div className="configer__body">
          {unEnableItems.map(value => {
            return (
              <div
                onClick={() => {
                  enableItems.push(value);
                  onEnableChange([...enableItems]);
                }}
                className="configer__li"
                key={value + 'unEnable'}
              >
                {labelChanger(value)}
              </div>
            );
          })}
          {isEmpty(unEnableItems) && (
            <div>
              <JDtypho color="grey1">No Data</JDtypho>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Configer;
