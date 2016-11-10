import s from './login.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {TextField, RaisedButton} from 'material-ui'
import Register from '../Register/register'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';
import Auth from '../../actions/auth/auth';

class Login extends Component {
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

  // TODO(c9dong): Make use of this after login is implemented
  getValidationState = (e) => {
    if (this.state.email && this.state.password) {
      return 'success';
    }
    return 'error';
  }

  onLoginButtonClick = (e) => {
    Auth.login(this.state.email, this.state.password, (success) => {
      if (success) {
        browserHistory.push('/home');
      } else {
        // FIXME: Do something?
        console.log('error');
      }
    });
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

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
