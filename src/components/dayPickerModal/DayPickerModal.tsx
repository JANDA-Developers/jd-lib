import React from 'react';
import { IUseModal } from '../../hooks/hook';
import JDmodal from '../modal/Modal';
import JDdayPicker, { IJDdayPickerProps } from '..//dayPicker/DayPicker';
import moment from 'moment-timezone';
import JDtypho from '../typho/Typho';

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
  const handleChangeDate = () => {
    callBackChangeDate && callBackChangeDate(from, to);
    if (from && to && autoClose) {
      setTimeout(() => {
        modalHook.closeModal();
      }, 200);
    }
  };

  return (
    <JDmodal paddingSize="no" className="DayPickerModal" {...modalHook}>
      <div
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="DayPickerModal__head">
          <JDtypho mb="small" color="grey3">
            {moment(from || undefined).format('YYYY')}
          </JDtypho>
          <JDtypho mb="no" color="white" size="h5">
            {isRange
              ? (from ? moment(from).format('MM/DD dd') : '선택') +
                ` ~ ` +
                (to ? moment(to).format('MM/DD dd') : '선택')
              : from
              ? moment(from || undefined).format('MM/DD dd')
              : '선택'}
          </JDtypho>
        </div>
        <JDdayPicker
          from={from}
          to={to}
          isRange={isRange}
          onChangeDate={handleChangeDate}
          {...props}
        />
      </div>
    </JDmodal>
  );
};

export default JDdayPickerModal;
