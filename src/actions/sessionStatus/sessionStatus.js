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
            var data = res.data;
            if (!_.isEmpty(res.data)) {
              data = {
                ...data,
                currentTime: 500
              }
            }

            dispatch({
              type: types.SESSION_STATUS,
              sessionStatus: data
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
}