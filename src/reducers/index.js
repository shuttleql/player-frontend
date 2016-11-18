import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import MatchesReducer from './matches';
import UsersReducer from './users';

const rootReducer = combineReducers({
    matches: MatchesReducer,
    users: UsersReducer,
    routing
});

export default rootReducer;
