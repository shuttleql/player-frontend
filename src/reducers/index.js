import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import UsersReducer from './users';
// import SessionReducer from './session';
// import GamesReducer from './games';

const rootReducer = combineReducers({
    // session: SessionReducer,
    // users: UsersReducer,
    // games: GamesReducer,
    routing
});

export default rootReducer;
