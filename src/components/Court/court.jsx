import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Court extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <div>
          <div>
            <div>
              {this.props.team1.map((player) => (
                <p 
                  className={ClassName(styles.centerText, styles.smText, styles.marginBot0)} 
                  key={player.id}
                >
                  {player.name}
                </p>
              ))}
            </div>
            <p 
              className={ClassName(styles.centerText, styles.xsmText, styles.marginBot, styles.marginTop)}
            >
              VS
            </p>
            <div>
              {this.props.team2.map((player) => (
                <p 
                  className={ClassName(styles.centerText, styles.smText, styles.marginBot0)} 
                  key={player.id}
                >
                  {player.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
      </div>
    )
  }
}

Court.propTypes = {
  courtName: React.PropTypes.string.isRequired,
  team1: React.PropTypes.any.isRequired,
  team2: React.PropTypes.any.isRequired
};