import * as types from '../actions/types';

const initialState = {};

const sessionStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_STATUS:
      return action.sessionStatus;
    default:
      return state;
  }
};

export default sessionStatusReducer;
