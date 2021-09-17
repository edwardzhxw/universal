import lightyear from './lightyear';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const mock = new MockAdapter(axios);
const _url = 'https://moon-tracking.longxins.com/v1/events';
const _lightyear = new lightyear({
  baseUrl: _url,
  user_id: 123215,
  browser_key: uuidv4(),
  device_type: '10',
  device_language: 'ja',
  site_language: 'en-us',
  country: 'cn',
  screen_size: [800, 1024],
});

describe('lightyear', () => {
  it('should have baseUrl parameter', () => {
    expect(typeof _lightyear.baseUrl).toBe('string');
  });

  it('should work', async () => {
    mock.onPost(_url).reply(204);
    expect(await _lightyear.track('event name')).toBeTruthy();
  });

  it('should not work', async () => {
    mock.onPost(_url).reply(500);
    expect(await _lightyear.track('event name')).toBeFalsy();
  });
});
