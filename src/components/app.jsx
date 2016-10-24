import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/index.scss';
import React from 'react';

import Header from './Header/header.jsx';
import Login from './Login/Login.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div id='container'>
          <Header title={'ShuttleQL'} />
          <div id='main'>
          </div>
        </div>
      </div>
    )
  }
}