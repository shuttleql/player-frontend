import s from './timer.scss';
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import _ from 'lodash';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {time: this.props.startTime};
    setInterval(this.updateTimer, 1000);
  }

  updateTimer = () => {
    var time = this.state.time;
    time = Math.max(time-1, 0);
    time --;
    if (time < 0) {
      time = this.props.maxTime;
    }
    this.setState({time: time});
  }

  pad = (num) => {
    if (num < 10) {
      console.log(' '+ num);
      return '0'+num;
    }
    return num;
  }

  render() {
    return (
      <div className={this.props.className}>
      <div className={s.container}>
        <h3>{this.pad(Math.trunc(this.state.time / 60))}</h3>
        <h3>:</h3>
        <h3>{this.pad(this.state.time % 60)}</h3>
      </div>
      </div>
    )
  }
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
)(Timer);