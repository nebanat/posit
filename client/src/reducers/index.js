import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import groups, { groupIsLoading, groupHasError, groupUsers } from './groups';
import messages from './messages';
import users, { userIsLoading, userHasError, searchUsers } from './users';


const rootReducers = combineReducers({
  groups,
  messages,
  users,
  userIsLoading,
  userHasError,
  groupIsLoading,
  groupHasError,
  groupUsers,
  searchUsers,
  routing: routerReducer
});

export default rootReducers;
