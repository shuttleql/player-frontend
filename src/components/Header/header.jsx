import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {AppBar} from 'material-ui'

import customTheme from '../../theme/customTheme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {headerStyle} from './header.style.js';

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
        />
        </MuiThemeProvider>
      </div>
    )
  }
}