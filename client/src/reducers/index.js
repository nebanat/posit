/*eslint-disable */
import { combineReducers } from 'redux';
import groups from './groups';
import messages from './messages';
import users from './users';
import { userIsLoading,userHasError } from './users';
import { groupIsLoading,groupHasError } from './groups';
import { routerReducer } from 'react-router-redux'

const rootReducers = combineReducers({
    groups,
    messages,
    users,
    userIsLoading,
    userHasError,
    groupIsLoading,
    groupHasError,
    routing:routerReducer
});

export default rootReducers;
