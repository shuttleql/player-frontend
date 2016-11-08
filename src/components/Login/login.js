import s from './login.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {TextField, RaisedButton} from 'material-ui'
import Register from '../Register/register'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  getValidationState = (e) => {
    if (this.state.email && this.state.password) {
      return 'success';
    }
    return 'error';
  }

  onLoginButtonClick = (e) => {

    axios
      .post('http://localhost:3000/shared/auth', {
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          window.location.pathname = '/home';
        }
      });
  }

  onRegisterButtonClick = (e) => {
    console.log('register button clicked');
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div className={ClassName(styles.centerBlock, s.container)}>
          <div className={s.loginForm}>
            <h3 className={styles.centerText}>Welcome to ShuttleQL</h3>
              <TextField
                floatingLabelText="email"
                type='text'
                onChange={this.handleUsernameChange}
                fullWidth={true}
                autoFocus
              />
              <TextField
                floatingLabelText="password"
                type='password'
                onChange={this.handlePasswordChange}
                fullWidth={true}
              />
              <RaisedButton
                className={s.formElement}
                label="Login"
                primary={true}
                onClick={this.onLoginButtonClick}
              />
          </div>
          <Register />
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
