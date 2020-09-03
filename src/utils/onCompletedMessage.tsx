import { toast } from 'react-toastify';
import { TElements } from '../types/interface';

// 한국어인지 검사한다 한국어검사
export const isIncludeKr = (str: string | null): boolean => {
	if (!str) return false;
	const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	if (check.test(str)) return true;
	return false;
};

type TResult = {
	error?: string | null;
	errors?: string[] | string | null;
	ok: boolean | null;
	[data: string]: any;
};

const onCompletedMessage = (
	result: TResult,
	resultOK: string,
	resultFale: string | undefined,
	SystemFalse?: TElements,
	queryName?: string
) => {
	if (!result) {
		return;
	}
	if (typeof result.errors === "object") result.error = result.errors?.join();
	else if (!result.error) result.error = result.errors;
	const haveKr = isIncludeKr(result.error || '');
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
		resultFale &&
			toast.warn(SystemFalse, {
				toastId: `${queryName}-error`
			});
		resultFale ||
			toast.warn(SystemFalse, {
				toastId: `${queryName}-error`
			});
	}
};

export default onCompletedMessage;
