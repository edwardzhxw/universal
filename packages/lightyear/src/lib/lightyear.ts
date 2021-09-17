import axios, { AxiosResponse, AxiosError } from 'axios';

type GLOBAL_ST_DEVICE_TYPE = '10';
type GLOBAL_TE_DEVICE_TYPE = '11';
type CN_ST_DEVICE_TYPE = '15';
type WEBVIEW_DEVICE_TYPE = '16';

interface LightYearParameters {
  baseUrl: string;
  user_id: number;
  browser_key: string;
  device_type: GLOBAL_ST_DEVICE_TYPE | GLOBAL_TE_DEVICE_TYPE | CN_ST_DEVICE_TYPE | WEBVIEW_DEVICE_TYPE;
  device_language: string;
  site_language: string;
  country: string;
  screen_size: number[];
}

export default class lightyear {
  baseUrl = window.location.host;
  readonly commonParameter: string = 'abc';

  constructor({ baseUrl }: LightYearParameters) {
    this.baseUrl = baseUrl;
  }

  async track(eventName: string): Promise<boolean> {
    let isSuccess = false;
    try {
      const res:AxiosResponse<string> = await axios.post(this.baseUrl, {
        what: eventName,
        // ...eventCommonParam,
        // data,
      });
      isSuccess = !!res.status;
    } catch(err) {
      const _error:AxiosError<any> = err;
      isSuccess = false;
    } finally {
      // TODO
    }
    return isSuccess;
  }
}
