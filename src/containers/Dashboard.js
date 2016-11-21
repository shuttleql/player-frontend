import s from './Dashboard.scss';
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import HomeIcon from 'material-ui/svg-icons/action/home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import tokenManager from '../tokenManager';

import Logo from '../static/image/shuttleql_logo.png';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  componentDidMount() {
    browserHistory.listen(location => this.onLocationChange(location));
  }

  onLogoutButtonClick = (e) => {
    tokenManager.clearToken();
    browserHistory.push("/login");
  }

  onBottomMenuItemClick = (index) => {
    this.setState({selectedIndex: index});
    if (index == 0) {
      browserHistory.push("/dashboard/home");
    } else if (index == 1) {
      browserHistory.push("/dashboard/matches");
    }
  }

  onLocationChange = (location) => {
    const path = location.pathname;
    const action = location.action;
    if (action === 'PUSH') return;

    if (path.indexOf('home') !== -1) {
      this.setState({ selectedIndex: 0 });
    } else if (path.indexOf('matches') !== -1) {
      this.setState({ selectedIndex: 1 });
    }
  }

  render() {
    return (
      <div>
      <MuiThemeProvider>
        <div>
          <AppBar
            className={s.appbar}
            title="ShuttleQL"
            iconElementLeft={
              <IconButton>
              <img src={Logo} className={s.logo}/>
              </IconButton>
            }
            iconElementRight={
              <FlatButton
                label="Logout"
                onClick={this.onLogoutButtonClick}
                />
            }
          />
          <div className={s.content}>
            {this.props.children}
          </div>
          <div className={s.tabbar}>
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Home"
                  icon={<HomeIcon />}
                  onTouchTap={() => this.onBottomMenuItemClick(0)}
                />
                <BottomNavigationItem
                  label="Matches"
                  icon={<ViewListIcon />}
                  onTouchTap={() => this.onBottomMenuItemClick(1)}
                />
              </BottomNavigation>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
};

Dashboard.propTypes = {
  children: PropTypes.object
};

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
)(Dashboard);
