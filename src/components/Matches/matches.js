import s from './matches.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardText, CardMedia, Chip, Avatar} from 'material-ui';
import Warning from '../Warning/warning';
import Court from '../Court/court'
import Match from '../../actions/matches/match';
import User from '../../actions/users/user';

import {orange100, blue100, red100, lightGreen100, pink100, orange500, blue500, red500, lightGreen500, pink500, orange900, blue900, red900, lightGreen900, pink900} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

import _ from 'lodash';

class Matches extends Component {

  constructor(props) {
    super(props);

    this.state = {
      levelColors: [
        { main: orange500, background: orange900, court: orange100 },
        { main: blue500, background: blue900, court: blue100 },
        { main: red500, background: red900, court: red100 },
        { main: lightGreen500, background: lightGreen900, court: lightGreen100 },
        { main: pink500, background: pink900, court: pink100 }
      ]
    }
  }

  componentDidMount = () => {
    this.props.fetchUserInfo();
    this.props.fetchMatches();
  }

  colorForPlayer = (player) => {
    return this.state.levelColors[player.level - 1].main;
  }

  backgroundColorForPlayer = (player) => {
    return this.state.levelColors[player.level - 1].background;
  }

  courtColorForCourt = (court) => {
    const players = _.concat(court.team1, court.team2);
    const isPlaying = _.some(players, (player) => { return player.name === this.props.userData.name });
    if (isPlaying) {
      const courtColor = this.state.levelColors[this.props.userData.level - 1].court;
      return { backgroundColor: courtColor };
    } else {
      return {};
    }
  }

  teamForPlayer = (court, player) => {
    const inTeam1 = _.some(court.team1, (p) => {
      return p.id == player.id;
    });
    if (inTeam1) {
      return 'A';
    } else {
      return 'B';
    }
  }

  render() {
    return (
      <div>
        {this.props.courtData.matches.length === 0 || !this.props.userData.name ?
          <Warning message={'There are currently no matches being made, please check when the match making begins'} />
        :
          <div className={s.formContainer}>
            {this.props.courtData.matches.map((court) => (
              <Card key={court.courtName} style={this.courtColorForCourt(court)} className={s.formElement}>
                <CardHeader
                      title={court.courtName}
                      titleStyle={{fontSize: 24}}
                      subtitle={court.courtType}
                      subtitleStyle={{fontSize: 20}}
                      showExpandableButton={false}
                    />
                <CardText className={s.headerElement}>
                    {
                      _.concat(court.team1, court.team2).map((player) => (
                        <Chip
                          key={player.id}
                          backgroundColor={this.colorForPlayer(player)}
                        >
                          <Avatar
                            size={24}
                            backgroundColor={this.backgroundColorForPlayer(player)}
                          >
                            {this.teamForPlayer(court, player)}
                          </Avatar>
                          <span>{player.name}</span>
                        </Chip>
                      ))
                    }
                    </CardText>
              </Card>
            ))}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courtData: state.matches,
    userData: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: () => {
      dispatch(Match.fetchSessionMatches());
    },
    fetchUserInfo: () => {
      dispatch(User.fetchUserInfo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
