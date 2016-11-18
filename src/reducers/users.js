import * as types from '../actions/types';

const initialState = {
  name: '',
  gender: '',
  email: '',
  level: '',
  preference: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      action.userData.name = action.userData.firstName + ' ' + action.userData.lastName;
      return action.userData;
    default:
      return state;
  }
};

export default usersReducer;
