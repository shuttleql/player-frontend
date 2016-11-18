import config from '../../config';
import * as types from '../types';
import request from '../request';

export default {
  fetchUserInfo(id) {
    return (dispatch) => {
      request
        .getInstance()
        .get(`${config.GATEWAY_URL}/shared/users/info`)
        .then((res) => {
          if (res.status == 200) {
            dispatch({
              type: types.GET_USER_INFO,
              userData: res.data
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}