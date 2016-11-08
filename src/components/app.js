import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/index.scss';
import React from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';
import Login from './Login/Login';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div id='container'>
          <Header title={'ShuttleQL'} />
          <div id='main'></div>
          <Footer/>
        </div>
      </div>
    )
  }
}
