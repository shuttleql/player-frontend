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
import Timer from '../Timer/timer';

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
    var playerId = this.props.user.id;
    var matches = this.props.courtData.matches;
    return _.find(matches, (match) => {
      var teams = _.concat(match.team1, match.team2);
      return _.find(teams, (player) => {
        return player.id == playerId;
      });
    });
  }

  colorForState = (hasSession, court) => {
    var color = red800;
    if (!hasSession) {
      color = red800;
    } else {
      if (court) {
        color = green800;
      } else {
        color = yellow800;
      }
    }
    return color;
  }

  textForState = (hasSession, court) => {
    var text = '';
    if (!hasSession) {
      text = 'Club is currently closed';
    } else {
      if (court) {
        text = 'Playing at ' + court.courtName;
      } else {
        var position = this.positionInQueue() + 1;
        var rounds = Math.ceil(position / this.props.courtData.courtSize);
        var rString = rounds == 1 ? 'round' : 'rounds';
        text = 'Playing in ' + rounds + ' ' + rString;
      }
    }
    return text;
  }

  positionInQueue = () => {
    var playerId = this.props.user.id;
    var index = -1;
    _.find(this.props.courtData.queue, (player, idx) => {
      index = idx;
      return player.id == playerId;
    });
    return index;
  }

  render() {
    var hasSession = this.isSessionOpen();
    var court = this.isPlaying();

    var colorStyle = {
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