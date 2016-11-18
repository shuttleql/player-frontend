import * as types from '../actions/types';

const initialState = {}

const getInitials = (firstName, lastName) => {
  let initial = '';
  if (firstName && firstName.length > 0) {
    initial += firstName[0];
  }
  if (lastName && lastName.length > 0) {
    initial += lastName[0];
  }
  return initial;
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      action.userData.name = action.userData.firstName + ' ' + action.userData.lastName;
      action.userData.initial = getInitials(action.userData.firstName, action.userData.lastName);
      return { 
        ...action.userData,
        name: action.userData.firstName + ' ' + action.userData.lastName,
        initial: getInitials(action.userData.firstName, action.userData.lastName)
      };
    default:
      return state;
  }
};

export default usersReducer;
