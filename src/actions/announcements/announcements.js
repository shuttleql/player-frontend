import config from '../../config';
import * as types from '../types';
import request from '../request';

export function fetchAnnouncements(offset, size) {
  return (dispatch) => {
    request
      .getInstance()
      .get(`${config.GATEWAY_URL}/shared/announcements/${offset}/${size}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: types.RECEIVE_ANNOUNCEMENTS,
            announcements: res.data
          });
        }
      })
      .catch((err) => { console.log(err) });
  };
}
