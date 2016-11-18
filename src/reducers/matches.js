import * as types from '../actions/types';

const initialState = [];

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_SESSION_MATCHES:
      return action.courtData;
    default:
      return state;
  }
};

export default matchesReducer;
