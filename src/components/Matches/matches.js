import s from './matches.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardText, CardMedia, Chip, Avatar} from 'material-ui';
import Warning from '../Warning/warning';
import Court from '../Court/court'
import Match from '../../actions/matches/match';

import {orange500, blue500, red500, lightGreen500, pink500, orange900, blue900, red900, lightGreen900, pink900} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

import _ from 'lodash';

class Matches extends Component {

  componentDidMount = () => {
    this.props.fetchMatches();
  }

  playersToString = (players) => {
    let s = '';
    for (const player of players) {
      s += player.name + ', ';
    }
    return s.substr(0,s.length-2);
  }

  teamDataToString = (court) => {
    let s = this.playersToString(court.team1) + ', ';
    s += this.playersToString(court.team2);
    return s;
  }

  courtType = (court) => {
    if (court.team1.length == 1 && court.team2.length == 1) {
      return 'Singles';
    }
    return 'Doubles';
  }

  colorForPlayer = (player) => {
    var colors = [orange500, blue500, red500, lightGreen500, pink500];
    return colors[Math.min(colors.length-1, player.level-1)];
  }

  backgroundColorForPlayer = (player) => {
    var colors = [orange900, blue900, red900, lightGreen900, pink900];
    return colors[Math.min(colors.length-1, player.level-1)];
  }

  nameForPlayer = (player) => {
    return player.firstName + ' ' + player.lastName;
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
        {this.props.courtData.matches.length === 0 ?
          <Warning message={'There are currently no matches being made, please check when the match making begins'} />
        :
          <div className={s.formContainer}>
            {this.props.courtData.matches.map((court) => (
              <Card key={court.courtName} className={s.formElement}>
                <CardHeader
                      title={court.courtName}
                      titleStyle={{fontSize: 24}}
                      subtitle={this.courtType(court)}
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
    courtData: state.matches
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatches: () => {
      dispatch(Match.fetchSessionMatches());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
