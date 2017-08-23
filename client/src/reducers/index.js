/*eslint-disable */
import { combineReducers } from 'redux';
import groups from './groups';
import messages from './messages';
import { routerReducer } from 'react-router-redux'

const rootReducers = combineReducers({groups, messages,routing:routerReducer});

export default rootReducers;
