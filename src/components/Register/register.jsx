import s from './register.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {FlatButton, Dialog} from 'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Register extends React.Component {
  state = {
    open: false
  }

  openDialog = () => {
    this.setState({open:true});
  }

  closeDialog = () => {
    this.setState({open:false});
  }

  render() {
    const buttonStyle = {
      width: '100%'
    }
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.closeDialog}
      />,
    ];
    return (
      <div>
      <MuiThemeProvider>
        <div>
          <FlatButton
            label='How do I register?'
            className={s.registerButton}
            secondary={true}
            onTouchTap={this.openDialog}
          />
          <Dialog
            title='How do I register?'
            actions={actions}
            open={this.state.open}
            onRequestClose={this.closeDialog}
          >
            Registration is currently closed. Please contact the club executives for more information.
          </Dialog>
        </div>
        </MuiThemeProvider>
      </div>
    )
  }
}