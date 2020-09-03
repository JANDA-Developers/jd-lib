import { IuseImageUploaderOption } from '../hooks/hook';
import { JDpageInfo } from './interface';

export const DEFAULT_BASE64 = {
	base64: '',
	fileName: ''
};

export const DEFAULT_IMAGEUP_LOADER_OPTION: IuseImageUploaderOption = {
	quality: 100,
	resizeMaxHeight: 500,
	resizeMaxWidth: 500
};

export const DEFAULT_PAGE_INFO: JDpageInfo = {
	currentPage: 0,
	rowCount: 0,
	totalPage: 0
};

export const DEFAULT_PAGINATION_SETTING = {
	pageRangeDisplayed: 5,
	marginPagesDisplayed: 1
};

export const DEFAULT_PHOTO = 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png';
