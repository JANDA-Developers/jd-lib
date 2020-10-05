import { JDColor, TextAlign, TextSize, IconSize, TMarginSize } from '../types/enum';
import { JDatomConfig } from '../types/interface';

// 업데이트 => 구성요소에 들어가는 글로벌 css를 이걸로교체
// 우선은 마진만 시험적용
// 이걸로 하면 css를 줄일수있음
// 성능차이를 기대하진 않지만 그떄마다 클래스를 쓰지 않고
// 글로벌 css를 사용하는건 문맥상 좋아보이지 않음 ㅠ
const JDmrClass = (size?: TMarginSize | null) => {
	let obj: any = {};
	if (!size) return {};
	obj[`JDstandard-space0`] = size === 'no';
	obj[`JDstandard-superTiny-space`] = size === 'tiny';
	obj[`JDstandard-tiny-space`] = size === 'tiny';
	obj[`JDstandard-small-space`] = size === 'small';
	obj[`JDstandard-space`] = size === 'normal';
	obj[`JDstandard-large-space`] = size === 'large';
	obj[`JDstandard-huge-space`] = size === 'huge';
	obj[`JDstandard-largest-space`] = size === 'largest';

	return obj;
};

const JDmbClass = (size?: TMarginSize) => {
	let obj: any = {};
	if (!size) return obj;
	obj[`JDstandard-mb0`] = size === 'no';
	obj[`JDstandard-largest-mb`] = size === 'largest';
	obj[`JDstandard-huge-mb`] = size === 'huge';
	obj[`JDstandard-large-mb`] = size === 'large';
	obj[`JDstandard-margin-bottom`] = size === 'normal';
	obj[`JDstandard-small-mb`] = size === 'small';
	obj[`JDstandard-tiny-mb`] = size === 'tiny';
	obj[`JDstandard-superTiny-mb`] = size === 'superTiny';

	return obj;
};

// mixin 파일의
const iconSizeClass = (boxName: string, size?: IconSize | null) => {
	let obj: any = {};
	obj[`${boxName}--tiny`] = size === 'tiny';
	obj[`${boxName}--small`] = size === 'small';
	obj[`${boxName}--normal`] = size === 'normal';
	obj[`${boxName}--large`] = size === 'large';
	obj[`${boxName}--huge`] = size === 'huge';
	obj[`${boxName}--largest`] = size === 'largest';
	obj[`${boxName}--largest2`] = size === 'largest2';

	return obj;
};

const textColorClass = (color?: JDColor | null) => {
	let obj: any = {};

	if (!color) {
		return ({
			'JDtextColor--default': true
		});
	}
	obj[`JDtextColor--primary`] = color === 'primary';
	obj[`JDtextColor--point`] = color === 'point';
	obj[`JDtextColor--positive`] = color === 'positive';
	obj[`JDtextColor--warn`] = color === 'warn';
	obj[`JDtextColor--grey1`] = color === 'grey1';
	obj[`JDtextColor--grey2`] = color === 'grey2';
	obj[`JDtextColor--grey3`] = color === 'grey3';
	obj[`JDtextColor--grey4`] = color === 'grey4';
	obj[`JDtextColor--grey5`] = color === 'grey5';
	obj[`JDtextColor--darkPrimary`] = color === 'darkPrimary';
	obj[`JDtextColor--error`] = color === 'error';
	obj[`JDtextColor--new`] = color === 'new';
	obj[`JDtextColor--black`] = color === 'black';
	obj[`JDtextColor--white`] = color === 'white';
	obj[`JDtextColor--blue`] = color === 'blue';
	obj[`JDtextColor--third`] = color === 'third';
	obj[`JDtextColor--lightPrimary`] = color === 'lightPrimary';
	return obj;
};

const bgColorClass = (color?: JDColor | null) => {
	let obj: any = {};
	if (!color) return {};
	obj[`JDbgColor--primary`] = color === 'primary';
	obj[`JDbgColor--point`] = color === 'point';
	obj[`JDbgColor--positive`] = color === 'positive';
	obj[`JDbgColor--warn`] = color === 'warn';
	obj[`JDbgColor--grey1`] = color === 'grey1';
	obj[`JDbgColor--grey2`] = color === 'grey2';
	obj[`JDbgColor--grey3`] = color === 'grey3';
	obj[`JDbgColor--grey4`] = color === 'grey4';
	obj[`JDbgColor--grey5`] = color === 'grey5';
	obj[`JDbgColor--darkPrimary`] = color === 'darkPrimary';
	obj[`JDbgColor--error`] = color === 'error';
	obj[`JDbgColor--new`] = color === 'new';
	obj[`JDbgColor--black`] = color === 'black';
	obj[`JDbgColor--white`] = color === 'white';
	obj[`JDbgColor--blue`] = color === 'blue';
	obj[`JDbgColor--third`] = color === 'third';
	obj[`JDbgColor--lightPrimary`] = color === 'lightPrimary';

	return obj;
};

const borderClass = (color?: JDColor | null) => {
	let obj: any = {};
	if (!color) return {};
	obj[`JDborderColor--primary`] = color === 'primary';
	obj[`JDborderColor--point`] = color === 'point';
	obj[`JDborderColor--positive`] = color === 'positive';
	obj[`JDborderColor--warn`] = color === 'warn';
	obj[`JDborderColor--grey1`] = color === 'grey1';
	obj[`JDborderColor--grey2`] = color === 'grey2';
	obj[`JDborderColor--grey3`] = color === 'grey3';
	obj[`JDborderColor--grey4`] = color === 'grey4';
	obj[`JDborderColor--grey5`] = color === 'grey5';
	obj[`JDborderColor--darkPrimary`] = color === 'darkPrimary';
	obj[`JDborderColor--error`] = color === 'error';
	obj[`JDborderColor--new`] = color === 'new';
	obj[`JDborderColor--black`] = color === 'black';
	obj[`JDborderColor--white`] = color === 'white';
	obj[`JDborderColor--blue`] = color === 'blue';
	obj[`JDborderColor--third`] = color === 'third';

	return obj;
};

const textAlignClass = (align?: TextAlign) => {
	let obj: any = {};
	if (!align) return {};
	obj[`JDtext-align--left`] = align === 'left';
	obj[`JDtext-align--center`] = align === 'center';
	obj[`JDtext-align--right`] = align === 'right';

	return obj;
};

const textSizeClass = (size?: TextSize) => {
	let obj: any = {};
	if (!size) return obj;

	obj[`JDtext-size-h1`] = size === 'h1';
	obj[`JDtext-size-h2`] = size === 'h2';
	obj[`JDtext-size-h3`] = size === 'h3';
	obj[`JDtext-size-h4`] = size === 'h4';
	obj[`JDtext-size-h5`] = size === 'h5';
	obj[`JDtext-size-h6`] = size === 'h6';
	obj[`JDtext-size-large`] = size === 'large';
	obj[`JDtext-size-normal`] = size === 'normal';
	obj[`JDtext-size-small`] = size === 'small';
	obj[`JDtext-size-tiny`] = size === 'tiny';
	obj[`JDtext-size-superTiny`] = size === 'superTiny';

	return obj;
};

const mbClass = (boxName: string, size?: TMarginSize) => {
	let obj: any = {};
	if (!size) return obj;
	obj[`${boxName}--largest-mb`] = size === 'largest';
	obj[`${boxName}--huge-mb`] = size === 'huge';
	obj[`${boxName}--large-mb`] = size === 'large';
	obj[`${boxName}--space-mb`] = size === 'normal';
	obj[`${boxName}--small-mb`] = size === 'small';
	obj[`${boxName}--tiny-mb`] = size === 'tiny';
	obj[`${boxName}--superTiny-mb`] = size === 'superTiny';

	return obj;
};

const zClass = (index?: number) => {
	let obj: any = {};
	if (!index) return obj;
	obj[`JDz-index-1`] = index == 1;
	obj[`JDz-index-2`] = index == 2;
	obj[`JDz-index-3`] = index == 3;
	obj[`JDz-index-4`] = index == 4;
	obj[`JDz-index-5`] = index == 5;
	obj[`JDz-index-6`] = index == 6;
	obj[`JDz-index-7`] = index == 7;
	obj[`JDz-index-8`] = index == 8;
	obj[`JDz-index-9`] = index == 9;

	return obj;
};

const JDatomClasses = (configs: JDatomConfig) => {
	const { mb, mr, hide, z } = configs;
	return {
		...zClass(z),
		...JDmrClass(mr),
		...JDmbClass(mb),
		'JDdisplay-none': hide
	};
};

export {
	JDatomClasses,
	iconSizeClass,
	JDmbClass,
	JDmrClass,
	mbClass,
	borderClass,
	bgColorClass,
	textAlignClass,
	textColorClass,
	textSizeClass
};
