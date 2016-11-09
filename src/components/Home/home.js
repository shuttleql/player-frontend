import s from './home.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {Card, CardHeader, CardText, CardMedia} from 'material-ui'
import Court from '../Court/court'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courtData: []
    };
  }

  componentDidMount = () => {
    this.updateMatches();
  }

  updateMatches = () => {
    console.log("calling");
    axios
      .get('http://localhost:3000/shared/game')
      .then((res) => {
        console.log(res);
        this.setState({courtData: res.data});
      });
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
          {this.state.courtData.map((court) => (
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
