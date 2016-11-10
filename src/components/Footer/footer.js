import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ClassName from 'classname';
import {AppBar} from 'material-ui';
import styles from '../../css/index.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <footer>
              {this.props.children}
            </footer>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

Footer.propTypes = {
  children: PropTypes.object
};

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
)(Footer);
