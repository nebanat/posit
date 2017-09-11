import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import groups, { groupIsLoading, groupHasError } from './groups';
import messages from './messages';
import users, { userIsLoading, userHasError } from './users';


const rootReducers = combineReducers({
  groups,
  messages,
  users,
  userIsLoading,
  userHasError,
  groupIsLoading,
  groupHasError,
  routing: routerReducer
});

export default rootReducers;
