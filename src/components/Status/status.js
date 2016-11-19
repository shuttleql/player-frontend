import s from './status.scss';
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {Paper} from 'material-ui';
import SessionStatus from '../../actions/sessionStatus/sessionStatus';
import Match from '../../actions/matches/match';

import _ from 'lodash';

class Status extends Component {
  componentDidMount = () => {
    this.props.fetchSessionStatus();
    this.props.fetchMatches();
  }

  render() {
    var sessionOpen = !_.isEmpty(this.props.sessionStatus);
    return (
      <div>
        <Paper 
        className={ClassName({
          [s.status]: true,
          [s.red]: !sessionOpen,
          [s.yellow]: sessionOpen,
          [s.green]: false
        })}
        zDepth={2}>
          <h3>{sessionOpen ? 'Next match in: ' : 'Club is currently closed'}</h3>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessionStatus: state.sessionStatus,
    courtData: state.matches
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSessionStatus: () => {
      dispatch(SessionStatus.fetchSessionStatus());
    },
    fetchMatches: () => {
      dispatch(Match.fetchSessionMatches());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);