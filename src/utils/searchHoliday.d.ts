import { IHolidaysByApi } from "../types/interface";
declare const searchHoliday: (time: Date, holidays: IHolidaysByApi[]) => IHolidaysByApi | undefined;
export default searchHoliday;
