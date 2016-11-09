import s from './home.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader, CardText, CardMedia} from 'material-ui'
import Court from '../Court/court'
import {fetchSessionMatches} from '../../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

class Home extends Component {
  
  componentDidMount = () => {
    this.props.fetchMatches();
  }

  playersToString = (players) => {
    var s = '';
    for (var player of players) {
      s += player.name + ', ';
    }
    return s.substr(0,s.length-2);
  }

  teamDataToString = (court) => {
    var s = this.playersToString(court.team1) + ', ';
    s += this.playersToString(court.team2);
    return s;
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div className={s.formContainer}>
          {this.props.courtData.map((court) => (
            <Card key={court.courtName} className={s.formElement}>
              <CardHeader
                    title={court.courtName}
                    subtitle={this.teamDataToString(court)}
                    showExpandableButton={true}
                    actAsExpander={true}
                  />
              <CardText expandable={true}>
                <Court courtName={court.courtName} team1={court.team1} team2={court.team2} />
              </CardText>
            </Card>
          ))}
        </div>
        </MuiThemeProvider>
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
      dispatch(fetchSessionMatches());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
