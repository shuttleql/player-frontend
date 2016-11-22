import s from './announcements.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Warning from '../Warning/warning';
import { fetchAnnouncements } from '../../actions/announcements/announcements';

class Announcements extends Component {
  componentDidMount = () => {
    this.props.fetchAnnouncements();
  }

  render() {
    return (
      <div>
        { this.props.announcements.length ? (
          <List className={s.listContainer} disabled={true}>
            <Subheader>Admin Announcements</Subheader>
            {
              this.props.announcements.map(announcement => (
                <ListItem
                  key={announcement.id}
                  primaryText={announcement.message}
                  secondaryText={announcement.ctime}
                />
              ))
            }
          </List>
        ) : (
          <Warning message={'There are no announcements from admins.'} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    announcements: state.announcements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO: Fix when we have pagination
    fetchAnnouncements: () => {
      dispatch(fetchAnnouncements(0, 10000));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Announcements);
