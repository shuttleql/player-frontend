import axios from 'axios';
import config from '../../config';
import * as types from './types';
import request from '../request';

export default {
  fetchSessionMatches() {
    return (dispatch) => {
      request
        .getInstance()
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
}