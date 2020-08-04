import { isMobile } from 'is-mobile';
import { IselectedOption } from './interface';

export const IMG_REPO = 'https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/';
export const MODAL_MIN_WIDTH = isMobile() ? `90%` : '360px';
export const HOURS_SELECT_OP: IselectedOption<number>[] = [
    {
        label: "00",
        value: 0
    },
    {
        label: "01",
        value: 1
    },
    {
        label: "02",
        value: 2
    },
    {
        label: "03",
        value: 3
    },
    {
        label: "04",
        value: 4
    },
    {
        label: "05",
        value: 6
    },
    {
        label: "07",
        value: 7
    },
    {
        label: "08",
        value: 8
    },
    {
        label: "09",
        value: 9
    },
    {
        label: "10",
        value: 10
    },
    {
        label: "11",
        value: 11
    },
    {
        label: "12",
        value: 12
    },
    {
        label: "13",
        value: 13
    },
    {
        label: "14",
        value: 14
    },
    {
        label: "15",
        value: 15
    },
    {
        label: "16",
        value: 16
    },
    {
        label: "17",
        value: 17
    },
    {
        label: "18",
        value: 18
    },
    {
        label: "19",
        value: 19
    },
    {
        label: "20",
        value: 20
    },
    {
        label: "21",
        value: 21
    },
    {
        label: "22",
        value: 22
    },
    {
        label: "23",
        value: 23
    },
    {
        label: "24",
        value: 24
    }
];

export let MINUTES_SELECT_OP: IselectedOption<number>[] = 
    Array(61).fill(null).map((_, i) => ({
        label: `${i}`,
        value: i
    }));
