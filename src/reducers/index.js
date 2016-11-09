import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import MatchesReducer from './matches';

const rootReducer = combineReducers({
    matches: MatchesReducer,
    routing
});

export default rootReducer;
