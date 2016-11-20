import config from '../../config';
import * as types from '../types';
import request from '../request';

import _ from 'lodash';

export default {
  fetchSessionStatus() {
    return (dispatch) => {
      request
        .getInstance()
        .get(`${config.GATEWAY_URL}/shared/session/current`)
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: types.SESSION_STATUS,
              sessionStatus: res.data
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
}