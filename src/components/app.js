import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/index.scss';
import React, { PropTypes } from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';
import Login from './Login/Login';

const App = ({ children }) => (
  <div>
    <div id='container'>
      <Header title={'ShuttleQL'} />
      <div id='main'>
        {children}
      </div>
      <Footer/>
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.object
};

export default App;
