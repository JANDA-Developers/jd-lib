
export const getFromUrl = (get: string): string | null => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const ln = url.searchParams.get(get);
  return ln;
};

type Tresult = {
  [key: string]: string
}

export const getAllFromUrl = (): Tresult => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  let params: Tresult = {};

  url.searchParams.forEach((value, key) => {
    params[key] = value
  });

  return params;
};

export const getFullHost = () => location.protocol + "//" + location.host + "/";