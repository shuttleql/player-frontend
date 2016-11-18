import s from './home.scss';
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {Avatar, List, ListItem, Subheader, Divider} from 'material-ui';
import { connect } from 'react-redux';
import _ from 'lodash';

import EmailIcon from 'material-ui/svg-icons/communication/email';
import PersonIcon from 'material-ui/svg-icons/social/person';
import GenderIcon from 'material-ui/svg-icons/notification/wc';
import LevelIcon from 'material-ui/svg-icons/action/grade';
import PreferenceIcon from 'material-ui/svg-icons/action/favorite';

import User from '../../actions/users/user';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.fetchUserInfo();
  }

  render() {
    return (
      <div>
        { _.isEmpty(this.props.userData) ? '' :
        <div>
          <div className={ClassName(s.profileImage)}>
            <img 
              src="http://www.destination360.com/north-america/us/california/san-francisco/images/s/golden-gate-bridge.jpg"
            />
            <div className={ClassName(s.avatarContainer)}>
              <Avatar
                size={50}
              > {this.props.userData.initial} </Avatar>
              <h2>{this.props.userData.name}</h2>
              <p>Level {this.props.userData.level}</p>
            </div>
          </div>

          <List>
            <Subheader>Profile</Subheader>
            <ListItem
              leftIcon={<PersonIcon/>}
              primaryText={this.props.userData.name}
            />
            <Divider/>
            <ListItem
              leftIcon={<GenderIcon/>}
              primaryText={this.props.userData.gender}
            />
            <Divider/>
            <ListItem
              leftIcon={<EmailIcon/>}
              primaryText={this.props.userData.email}
            />
            <Divider/>
            <ListItem
              leftIcon={<LevelIcon/>}
              primaryText={this.props.userData.level}
            />
            <Divider />
            <ListItem
              leftIcon={<PreferenceIcon/>}
              primaryText={this.props.userData.preference}
            />
          </List>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => {
      dispatch(User.fetchUserInfo());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);