import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import groups, { groupIsLoading, groupHasError, groupUsers } from './groups';
import messages from './messages';
import users, {
  userIsLoading,
  userHasError, searchUsers,
  authUser,
  loginErrorMessage,
  registerSuccessMessage,
  registerErrorMessage, resetPasswordErrorMessage, resetPasswordSuccessMessage } from './users';


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
  authUser,
  loginErrorMessage,
  registerErrorMessage,
  registerSuccessMessage,
  resetPasswordErrorMessage,
  resetPasswordSuccessMessage,
  routing: routerReducer
});

export default rootReducers;
