import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { IselectedOption } from '../types/interface';
import { TLanguageShort } from '../types/enum';
export declare type IUseFetch = [any, boolean, boolean, (url: string | undefined) => void];
declare const useShouldSave: (
	updateValue: any[]
) => {
	shouldSave: boolean;
	setShouldSave: Dispatch<SetStateAction<boolean>>;
};
export interface IuseImageUploaderOption {
	resizeMaxWidth?: number;
	resizeMaxHeight?: number;
	quality?: number;
}
export declare type IuseTimePickerProps = {
	timeUnit?: number;
	defaultRange?: {
		startHour: number;
		endHour: number;
	};
	startDate?: number | Date;
};
declare const useStoreSelect: (
	stores: {
		[key: string]: any;
		code?: string | undefined;
		_id?: string | undefined;
		name: string;
	}[],
	withCode?: boolean | undefined,
	defaultPropCode?: string | undefined,
	defaultIdProp?: string | undefined
) => {
	storeSelectHook: IUseSelect<any>;
	selectedStoreValue: any;
	storesOp: {
		value: string;
		label: string;
	}[];
};
export declare type TlocalFile = {
	key: string;
	base64: string;
	fileName: string;
	mimeType: string;
};
export interface IuseFilesManager {
	onChangeFile: (event: ChangeEvent<HTMLInputElement>, index?: number) => Promise<void>;
	deletelocalFile: (deleteKey: string[]) => void;
	deleteUrl: (deleteUrl: string[]) => void;
	urls: string[];
	uploading: boolean;
	setlocalFiles: Dispatch<SetStateAction<TlocalFile[]>>;
	isError: boolean;
	setUrls: Dispatch<SetStateAction<string[]>>;
	localFiles: TlocalFile[];
}
declare const useFilesManager: (
	defaultUrls?: string[] | undefined,
	localFileKey?: string | undefined,
	imgOption?: IuseImageUploaderOption
) => IuseFilesManager;
declare function useDebounce(value: any, delay: number): any
export interface TUseInput<T = string> {
	value: T;
	onChangeValid: (value: boolean | string) => void;
	onChange: (foo: any) => any;
	isValid: any;
}
export declare type TUseRedirect = [boolean, string, (url: string) => void];
declare function useRedirect(inFlag?: boolean, inUrl?: string): TUseRedirect
declare function useInput<T = string>(
	defaultValue: T,
	defulatValid?: boolean | string,
	prefix?: any,
	suffix?: any
): TUseInput<T>
declare function useCheckBox(
	defaultValue: boolean
): {
	checked: boolean;
	onChange: (value: boolean) => void;
}
export interface IUseStoreSelect {
	storeSelectHook: IUseSelect<any>;
	selectedStoreId: any;
	storesOp: {
		value: string;
		label: string;
	}[];
}
export interface IUseDayPicker {
	from: Date | null;
	setFrom: React.Dispatch<React.SetStateAction<Date | null>>;
	to: Date | null;
	setTo: React.Dispatch<React.SetStateAction<Date | null>>;
	entered: Date | null;
	setEntered: React.Dispatch<React.SetStateAction<Date | null>>;
	setDate: (date: Date) => void;
}
declare function useDayPicker(defaultFrom: Date | null | string, defaultTo: Date | null | string): IUseDayPicker
export interface IUseColor {
	color: string;
	setColor: (inInfo: string) => void;
	setDisplay: (inInfo: boolean) => void;
	display: boolean;
}
declare function useRadio(defaultValue?: any): any[]
declare function useSwitch(
	defaultValue: boolean
): {
	checked: boolean;
	onChange: (value: boolean) => void;
}
declare function useRange(
	defaultValue: number,
	maxValue?: number,
	minValue?: number
): {
	value: number;
	onChange: (value: any) => void;
	maxValue: number | undefined;
	minValue: number | undefined;
}
export interface IUseSelect<V = any> {
	selectedOption: IselectedOption<V> | null;
	onChange(foo: IselectedOption<V>): void;
	options?: IselectedOption[];
}
export interface IUseDrawer {
	onClick: (e: any) => void;
	open: boolean;
}
declare function useSelect<V = any>(defaultValue: IselectedOption<V> | null, options?: IselectedOption[]): IUseSelect<V>
declare function useWindowSize(): {
	width: number;
	height: number;
}
declare function useToggle(defaultValue: boolean): [boolean, any]
export interface IUseSideNav {
	sideNavIsOpen: boolean;
	setSideNavIsOpen: (flag?: boolean | undefined) => void;
}
declare function useSideNav(): IUseSideNav
export interface IusePagination {
	page: number;
	setPage: (page: number) => void;
}
declare function usePagination(defaultValue: number): IusePagination
export interface IUseModal<T = any> {
	isOpen: boolean;
	openModal: (inInfo?: T) => void;
	closeModal: () => void;
	info: T;
}
declare function useModal<T = any>(defaultValue?: boolean, defaultInfo?: any): IUseModal<T>
export declare let CURRENT_LANG: TLanguageShort;
export interface IUseCheckBoxTable {
	onToogleRow: (key: string) => void;
	checkedIds: string[];
	setCheckedIds: Dispatch<SetStateAction<string[]>>;
	selectAll: any;
	setSelectAll: any;
	onToogleAllRow: () => void;
	isSelected: (key: string) => any;
}
declare const useCheckBoxTable: (defaultCheckIds?: string[], allIds?: string[]) => IUseCheckBoxTable;
declare const _default: {
	useInput: typeof useInput;
	useCheckBox: typeof useCheckBox;
	useRadio: typeof useRadio;
	useSwitch: typeof useSwitch;
	useSelect: typeof useSelect;
	useToggle: typeof useToggle;
	useModal: typeof useModal;
	useSideNav: typeof useSideNav;
	useRange: typeof useRange;
	useDebounce: typeof useDebounce;
	useStoreSelect: (
		stores: {
			[key: string]: any;
			code?: string | undefined;
			_id?: string | undefined;
			name: string;
		}[],
		withCode?: boolean | undefined,
		defaultPropCode?: string | undefined,
		defaultIdProp?: string | undefined
	) => {
		storeSelectHook: IUseSelect<any>;
		selectedStoreValue: any;
		storesOp: {
			value: string;
			label: string;
		}[];
	};
	useShouldSave: (
		updateValue: any[]
	) => {
		shouldSave: boolean;
		setShouldSave: Dispatch<SetStateAction<boolean>>;
	};
	useDayPicker: typeof useDayPicker;
	usePagination: typeof usePagination;
	useRedirect: typeof useRedirect;
	useCheckBoxTable: (defaultCheckIds?: string[], allIds?: string[]) => IUseCheckBoxTable;
	useFilesManager: (
		defaultUrls?: string[] | undefined,
		localFileKey?: string | undefined,
		imgOption?: IuseImageUploaderOption
	) => IuseFilesManager;
	useWindowSize: typeof useWindowSize;
};
export default _default;
export {
	useInput,
	useCheckBox,
	useRadio,
	useSwitch,
	useSelect,
	useToggle,
	useModal,
	useSideNav,
	useRange,
	useDebounce,
	useStoreSelect,
	useShouldSave,
	useDayPicker,
	usePagination,
	useFilesManager,
	useRedirect,
	useCheckBoxTable,
	useWindowSize
};
