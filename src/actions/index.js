import axios from 'axios';
import * as types from './types';
import config from '../config';

export function fetchSessionMatches() {
  return (dispatch) => {
    axios
      .get(`${config.GATEWAY_URL}/shared/game`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: types.RECEIVE_SESSION_MATCHES,
            courtData: res.data
          });
        }
      })
      .catch((err) => { console.log(err) });
  };
}
