import s from './warning.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { grey500 } from 'material-ui/styles/colors';
import WarningIcon from 'material-ui/svg-icons/action/info';

class Warning extends Component {

  render() {
    const colorStyle = {
      color: grey500
    }
    return (
      <div className={this.props.className}>
        <div className={s.container}>
          <WarningIcon className={s.icon} style={colorStyle}/>
          <h3 style={colorStyle}>{this.props.message}</h3>
        </div>
      </div>
    )
  }
}

Warning.propTypes = {
  message: React.PropTypes.string
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
)(Warning);
