import moment from 'moment';

export const pureDate = (date: Date | null) => {
	return date ? moment(date).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toDate() : null;
};
