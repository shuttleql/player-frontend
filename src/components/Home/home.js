import s from './home.scss';
import styles from '../../css/index.scss';
import ClassName from 'classname';
import React from 'react';
import {Avatar, List, ListItem, Subheader, Divider} from 'material-ui';
import { connect } from 'react-redux';
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
    const userData = this.props.userData ? this.props.userData : {
      name: 'David Dong',
      gender: 'Male',
      email: 'david.dong@gmail.com',
      level: 5,
      preference: 'doubles'
    };

    return (
      <div>
        <div className={ClassName(s.profileImage)}>
          <img 
            src="http://www.destination360.com/north-america/us/california/san-francisco/images/s/golden-gate-bridge.jpg"
          />
          <div className={ClassName(s.avatarContainer)}>
            <Avatar
              size={50}
            > DD </Avatar>
            <h2>David Dong</h2>
            <p>Level 5</p>
          </div>
        </div>

        <List>
          <Subheader>Profile</Subheader>
          <ListItem
            leftIcon={<PersonIcon/>}
            primaryText={userData.name}
          />
          <Divider/>
          <ListItem
            leftIcon={<GenderIcon/>}
            primaryText={userData.gender}
          />
          <Divider/>
          <ListItem
            leftIcon={<EmailIcon/>}
            primaryText={userData.email}
          />
          <Divider/>
          <ListItem
            leftIcon={<LevelIcon/>}
            primaryText={userData.level}
          />
          <Divider />
          <ListItem
            leftIcon={<PreferenceIcon/>}
            primaryText={userData.preference}
          />
        </List>
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