import React, { useEffect, useState } from 'react';
import { IUseModal } from '../../hooks/hook';
import JDmodal from '../modal/Modal';
import JDdayPicker, { IJDdayPickerProps } from '..//dayPicker/DayPicker';
import moment from 'moment-timezone';
import { JDalign, JDbutton } from '../..';
import { JDicon } from '../icons/Icons';

export interface Iprops extends IJDdayPickerProps {
  /** 날짜를 선택하고 나면 자동으로 닫음 */
  autoClose?: boolean;
  /** 모달 관련정보에 관한 HOOK */
  modalHook: IUseModal;
  callBackChangeDate?: (from?: Date | null, to?: Date | null) => void;
}

export const JDdayPickerModal: React.FC<Iprops> = ({
  modalHook,
  from,
  to,
  autoClose,
  callBackChangeDate,
  isRange,
  ...props
}) => {
  const [mode, setMode] = useState<'from' | 'to'>('from');
  const handleChangeDate = () => {
    callBackChangeDate && callBackChangeDate(from, to);

    if (from && to && autoClose) {
      setTimeout(() => {
        modalHook.closeModal();
      }, 200);
    }
  };

  useEffect(() => {
    if (from && !to) {
      setMode('to');
    } else {
      setMode('from');
    }
  }, [from?.getDay(), to?.getDay()]);

  const fromLabel = from ? moment(from).format('YYYY-MM-DD') : '선택없음';
  const toLabel = to ? moment(to).format('YYYY-MM-DD') : '선택없음';

  return (
    <JDmodal paddingSize="no" className="DayPickerModal" {...modalHook}>
      <div
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="DayPickerModal__head">
          <JDalign
            flex={{
              between: true,
              vCenter: true,
            }}
          >
            <JDbutton
              className="DayPickerModal__headDateBtn"
              onClick={() => {
                setMode('from');
                props.setFrom(null);
                props.setTo(null);
                props.setEntered(null);
              }}
              padding="large"
              size="small"
              mode="flat"
              mb="no"
              mr="no"
              thema={mode === 'from' ? 'primary' : undefined}
              label={fromLabel}
            />
            <JDicon icon="arrowLong" />
            <JDbutton
              className="DayPickerModal__headDateBtn"
              onClick={() => {
                setMode('to');
                props.setTo(null);
              }}
              padding="large"
              size="small"
              mode="flat"
              mb="no"
              mr="no"
              thema={mode === 'to' ? 'primary' : undefined}
              label={toLabel}
            />
          </JDalign>
        </div>
        <JDdayPicker
          from={from}
          to={to}
          foceFromSelect={!!(to && mode === 'from' && !from)}
          isRange={isRange}
          onChangeDate={handleChangeDate}
          {...props}
        />
      </div>
    </JDmodal>
  );
};

export default JDdayPickerModal;
