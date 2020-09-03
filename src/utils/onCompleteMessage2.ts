import { toast } from 'react-toastify';
import { TElements } from '../types/interface';
import { isIncludeKr } from './onCompletedMessage';

type TResult = {
	errors: string | null;
	ok: boolean | null;
	[data: string]: any;
};

const onCompletedMessage2 = (
	result: TResult,
	resultOK: string,
	resultFale: string | undefined,
	SystemFalse?: TElements,
	queryName?: string
) => {
	if (!result) {
		return;
	}
	const haveKr = isIncludeKr(result.error);
	if (result.ok) {
		toast.success(resultOK, {
			className: `${queryName}-ok`
		});
		// 한글이 있다면 에러 메세지는 백엔드에서 온것
	} else if (haveKr) {
		toast.warn(result.error, {
			toastId: `${queryName}-error`
		});
		// 한글이 없다면 에러 메세지는 프론트에서 기입한것
	} else {
		console.error(`Error From BackEnd Message  : ${result.error}`);

		toast.warn(resultFale ? resultFale : SystemFalse, {
			toastId: `${queryName}-error`
		});
	}
};

export default onCompletedMessage2;
