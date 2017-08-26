/*eslint-disable */
import { combineReducers } from 'redux';
import groups from './groups';
import messages from './messages';
import users from './users';
import { routerReducer } from 'react-router-redux'

const rootReducers = combineReducers({
    groups,
    messages,
    users,
    routing:routerReducer
});

export default rootReducers;
