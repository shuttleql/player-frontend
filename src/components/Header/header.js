import s from './header.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {AppBar} from 'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends React.Component {
  showMenu = (e) => {
    console.log('menu clicked');
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.showMenu}
          className={s.navBar}
        />
        </MuiThemeProvider>
      </div>
    )
  }
}