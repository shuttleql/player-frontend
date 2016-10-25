import s from './footer.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {AppBar} from 'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Footer extends React.Component {
  showMenu = (e) => {
    console.log('menu clicked');
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div className={s.footer}>
          <p className={s.footerMessage}>Created by David Dong, Jason Fang, Clement Hoang, Tony Lu</p>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}