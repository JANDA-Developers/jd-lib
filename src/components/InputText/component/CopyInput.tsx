import React from 'react';
import { toast } from 'react-toastify';
import { copytoClipboard } from '../../../utils/utils';
import { IInputTextCutsomProp, InputText } from '../InputText';

export interface ICopyInputProps extends IInputTextCutsomProp { }

export const CopyInput: React.FC<ICopyInputProps> = ({ ...props }) => {

    const handleIconClick = () => {
        copytoClipboard(props.value);
        toast("클립보드에 복사 되었습니다.");
    }

    return <InputText readOnly={true} {...props} iconOnClick={handleIconClick} icon="copy" iconProps={
        {
            hover: true,
            tooltip: "클립보드에 복사하기"
        }
    } />
};

export default CopyInput;