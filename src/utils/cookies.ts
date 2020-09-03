import moment from "moment-timezone";

export function setCookie(
  cookie_name: string,
  value: string,
  days: number | Date
) {
  if (typeof days === "number") {
    var exdate = moment().toDate();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    var cookie_value =
      escape(value) +
      (days == null ? "" : ";    expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
  } else {
  }
}

export function getCookie(name: string) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

export function eraseCookie(name:string) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}