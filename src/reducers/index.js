import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import MatchesReducer from './matches';
import UsersReducer from './users';
import SessionStatusReducer from './sessionStatus';

const rootReducer = combineReducers({
    matches: MatchesReducer,
    users: UsersReducer,
    sessionStatus: SessionStatusReducer,
    routing
});

export default rootReducer;
