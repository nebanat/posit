/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './components/utils/AuthService';
import {Provider} from 'react-redux'
import store,{history} from './store'

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

