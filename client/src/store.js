/*eslint-disable */
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import groups from './data/groups';
import messages from './data/messages';
import rootReducers from './reducers';


const defaultState = {
  groups,
  messages,
};

const store = createStore(rootReducers, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
