import 'bootstrap/dist/css/bootstrap.min.css';
import s from './login.scss'
import styles from '../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  getValidationState = (e) => {
    if (this.state.username && this.state.password) {
      return 'success';
    }
    return 'error';
  }

  onLoginButtonClick = (e) => {
    console.log('login button clicked');
  }

  onRegisterButtonClick = (e) => {
    console.log('register button clicked');
  }

  render() {
    return (
      <div>
        <div className={ClassName(styles.centerBlock, s.container)}>
          <div className={s.loginForm}>
            <h3 className={styles.centerText}>Welcome to ShuttleQL</h3>
            <FormGroup 
              validationState={this.getValidationState()}
              bsSize='lg'
            >
              <FormControl
                type='text'
                value={this.state.value}
                placeholder='username'
                onChange={this.handleUsernameChange}
                autoFocus
              />
              <FormControl
                type='password'
                value={this.state.value}
                placeholder='password'
                onChange={this.handlePasswordChange}
              />
              <Button
                bsClass={ClassName(s.formButton, 'btn')}
                bsStyle='primary'
                type='submit'
                onClick={this.onLoginButtonClick}
              >
                Login
              </Button>
            </FormGroup>
          </div>

          <div className={s.registerForm}>
            <p className={styles.centerText}>Don't have an account?</p>
            <a href='/register'><p className={styles.centerText}>How do I register?</p></a>
          </div>
        </div>
      </div>
    )
  }
}