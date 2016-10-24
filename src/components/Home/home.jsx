import s from './home.scss'
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {Card, CardHeader, CardText, CardMedia} from 'material-ui'
import Court from '../Court/court.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courtData: [
        // {
        //   team1: [{id: 1, name: 'David Dong'}, {id:2, name: 'Jason Fang'}],
        //   team2: [{id: 3, name: 'Clement Hoang'}, {id:4, name: 'Tony Lu'}],
        //   courtName: 'Court 1',
        //   courtId: 1
        // },
        // {
        //   team1: [{id: 1, name: 'David Dong'}, {id:2, name: 'Jason Fang'}],
        //   team2: [{id: 3, name: 'Clement Hoang'}, {id:4, name: 'Tony Lu'}],
        //   courtName: 'Court 2',
        //   courtId: 2
        // },
        // {
        //   team1: [{id: 1, name: 'David Dong'}, {id:2, name: 'Jason Fang'}],
        //   team2: [{id: 3, name: 'Clement Hoang'}, {id:4, name: 'Tony Lu'}],
        //   courtName: 'Court 3',
        //   courtId: 3
        // },
        // {
        //   team1: [{id: 1, name: 'David Dong'}, {id:2, name: 'Jason Fang'}],
        //   team2: [{id: 3, name: 'Clement Hoang'}, {id:4, name: 'Tony Lu'}],
        //   courtName: 'Court 4',
        //   courtId: 4
        // }
      ]
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