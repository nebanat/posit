/*eslint-disable */
import { createStore,applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import groups from './data/groups';
import * as actionCreators from './actions/actionCreators'
import rootReducers from './reducers';


// const defaultState = {
//   groups,

// };

const configureStore =(initialState)=>
{
  return createStore(rootReducers, initialState,applyMiddleware(thunk));
} 

// export const history = syncHistoryWithStore(browserHistory, store);

// store.dispatch(actionCreators.fetchUserGroups())

export default configureStore;
