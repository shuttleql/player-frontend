import * as types from '../actions/types';

const initialState = [];

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / (365 * 24 * 60 * 60));

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / (30 * 24 * 60 * 60));
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / (24 * 60 * 60));
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / (60 * 60));
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

const announcementReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_ANNOUNCEMENTS:
      return action.announcements.map(announcement => {
        return {
          ...announcement,
          ctime: timeSince(new Date(announcement.ctime))
        }
      });
    default:
      return state;
  }
};

export default announcementReducer;
