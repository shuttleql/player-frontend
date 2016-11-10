import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import HomeIcon from 'material-ui/svg-icons/action/home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from '../components/Footer/footer';
import tokenManager from '../tokenManager';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
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

  render() {
    return (
      <div>
      <MuiThemeProvider>
        <div>
          <AppBar
            title="ShuttleQL Player Dashboard - Jason Fang"
            iconElementRight={
              <FlatButton
                label="Logout"
                onClick={this.onLogoutButtonClick}
                />
            }
          />
          {this.props.children}
          <Footer>
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
          </Footer>
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
