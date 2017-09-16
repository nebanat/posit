/*eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import groups from './data/groups';
import messages from './data/messages';
import groupIsLoading from './data/groupIsLoading';
import users from './data/users';
import searchUsers from './data/searchUsers';
import groupUsers from './data/groupUsers';
import rootReducers from './reducers';


const defaultState = {
  groups,
  messages,
  users,
  groupIsLoading,
  groupUsers,
  searchUsers
};

const store = createStore(
  rootReducers,
  defaultState,
  applyMiddleware(thunk));


export const history = syncHistoryWithStore(browserHistory, store);


export default store;
