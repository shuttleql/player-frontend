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
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import tokenManager from '../tokenManager';
import Logo from '../static/image/shuttleql_logo.png';
import Config from '../config';
import User from '../actions/users/user';
import SessionStatus from '../actions/sessionStatus/sessionStatus';
import Match from '../actions/matches/match';
const io = require('socket.io-client/socket.io');
const socket = io(Config.PIGEON_SOCKET_URL, {jsonp: false});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log('Connected to Pigeon.')
    });

    socket.on('update', (data) => {
      console.log('Stale data, resource: ', data);

      switch (data.resource) {
        case 'users':
          this.props.fetchUserInfo();
          break;
        case 'session':
          this.props.fetchSessionStatus();
          break;
        case 'matches':
          this.props.fetchMatches();
          break;
      }
    });

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
    } else if (index == 2) {
      browserHistory.push("/dashboard/announcements");
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
    } else if (path.indexOf('announcements') !== -1) {
      this.setState({ selectedIndex: 2 });
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
            <Paper zDepth={3}>
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
                <BottomNavigationItem
                  label="Announcements"
                  icon={<SocialNotifications />}
                  onTouchTap={() => this.onBottomMenuItemClick(2)}
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
    fetchUserInfo: () => {
      dispatch(User.fetchUserInfo());
    },
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
)(Dashboard);
