/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './components/utils/AuthService';
import {Provider} from 'react-redux'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux';
import * as actionCreators from './actions/actionCreators'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actionCreators.fetchUserGroups())

const Root = () => {
  return (
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} onEnter={requireAuth}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Router>
        </Provider>
        
    </div>
  )
}

ReactDOM.render(
    <Root />,
    document.getElementById('app')
)

