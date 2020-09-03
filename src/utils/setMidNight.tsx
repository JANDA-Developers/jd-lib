import moment from "moment-timezone";
import { TimePerMs } from "../types/enum";

// 자정으로 시간을 맞춰주는 함수
const setMidNight = (time: number) =>
  Math.floor(time / TimePerMs.DAY) * TimePerMs.DAY - 32400 * 1000;

const to4YMMDD = (date: any) => {
  if (!date) {
    return moment()
      .toISOString()
      .split("T")[0];
  }
  return moment(date)
    .toISOString()
    .split("T")[0];
};
export default setMidNight;
export { to4YMMDD };
