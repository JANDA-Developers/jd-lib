import moment from 'moment-timezone';

export const fromToRender = (from: Date | null, to: Date | null) => {
	return moment(from || new Date()).format('YYYY-MM-DD') + '~' + moment(to || new Date()).format('YYYY-MM-DD');
};
