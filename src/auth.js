import axios from 'axios';
import config from './config';

export default {
  login(email, password, cb) {
    axios
      .post(`${config.GATEWAY_URL}/shared/auth`, {
        email: email,
        password: password
      })
      .then((res) => {
        const response = res.data;

        if (response.status === 200) {
          const token = response.token || 'randomtoken';
          localStorage.setItem('token', token);
          cb && cb(true);
        } else {
          cb && cb(false);
        }
      })
  },

  getToken() {
    return localStorage.token
  }
}
