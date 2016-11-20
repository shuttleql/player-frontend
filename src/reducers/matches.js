import * as types from '../actions/types';

import _ from 'lodash';

const initialState = [];

const getCourtSize = (courts) => {
  var s = 0;
  _.forEach(courts, (court) => {
    var teams = _.concat(court.team1, court.team2);
    _.forEach(teams, (player) => {
      s ++;
    });
  });
  return s;
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_SESSION_MATCHES:
      return {
        ...action.courtData,
        courtSize: getCourtSize(action.courtData.matches),
        queueSize: action.courtData.queue.length
      }
    default:
      return state;
  }
};

export default matchesReducer;
