import { compose, createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import authUser from './data/authUser';
import groups from './data/groups';
import messages from './data/messages';
import groupIsLoading from './data/groupIsLoading';
import loginErrorMessage from './data/loginErrorMessage';
import registerSuccessMessage from './data/registerSuccessMessage';
import resetPasswordErrorMessage from './data/resetPasswordErrorMessage';
import resetPasswordSuccessMessage from './data/resetPasswordSuccessMessage';
import registerErrorMessage from './data/registerErrorMessage';
import passwordResetSuccessMessage from './data/passwordResetSuccessMessage';
import passwordResetErrorMessage from './data/passwordResetErrorMessage';
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
  searchUsers,
  authUser,
  loginErrorMessage,
  registerSuccessMessage,
  registerErrorMessage,
  resetPasswordErrorMessage,
  resetPasswordSuccessMessage,
  passwordResetErrorMessage,
  passwordResetSuccessMessage
};

const store = createStore(
  rootReducers,
  defaultState,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);


export const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);


export default store;
