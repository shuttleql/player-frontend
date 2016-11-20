import s from './status.scss';
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {Paper} from 'material-ui';
import SessionStatus from '../../actions/sessionStatus/sessionStatus';
import Match from '../../actions/matches/match';
import User from '../../actions/users/user';

import {red800, yellow800, green800} from 'material-ui/styles/colors';

import _ from 'lodash';

class Status extends Component {
  componentDidMount = () => {
    this.props.fetchSessionStatus();
    this.props.fetchMatches();
  }

  isSessionOpen = () => {
    return !_.isEmpty(this.props.sessionStatus);
  }

  isPlaying = () => {
    const playerId = this.props.user.id;
    const matches = this.props.courtData.matches;
    return _.find(matches, (match) => {
      const teams = _.concat(match.team1, match.team2);
      return _.find(teams, (player) => {
        return player.id == playerId;
      });
    });
  }

  colorForState = (hasSession, court) => {
    if (!hasSession) {
      return red800;
    } else {
      if (court) {
        return green800;
      } else {
        return yellow800;
      }
    }
  }

  textForState = (hasSession, court) => {
    if (!hasSession) {
      return 'Club is currently closed';
    } else {
      if (court) {
        return 'Playing at ' + court.courtName;
      } else {
        const position = this.positionInQueue() + 1;
        const rounds = Math.ceil(position / this.props.courtData.courtSize);
        const rString = rounds == 1 ? 'round' : 'rounds';
        return 'Playing in ' + rounds + ' ' + rString;
      }
    }
  }

  positionInQueue = () => {
    const playerId = this.props.user.id;
    let index = -1;
    _.find(this.props.courtData.queue, (player, idx) => {
      index = idx;
      return player.id == playerId;
    });
    return index;
  }

  render() {
    const hasSession = this.isSessionOpen();
    const court = this.isPlaying();

    const colorStyle = {
      backgroundColor: this.colorForState(hasSession, court)
    }

    return (
      <div className={this.props.className}>
        <Paper 
        className={ClassName(s.status)}
        style={colorStyle}
        zDepth={2}>
          <div className={s.textContainer}>
            <h3 className={s.text}>
              {this.textForState(hasSession, court)}
            </h3>
          </div>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessionStatus: state.sessionStatus,
    courtData: state.matches,
    user: state.users
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