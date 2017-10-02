import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,browserHistory } from 'react-router';
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App.jsx'
import Login from './components/auth/Login.jsx'
import AuthLogin from './components/auth/AuthLogin.js'
import AuthRegister from './components/auth/AuthRegister.js'
import AuthResetPassword from './components/auth/AuthResetPassword.js'
import AuthPasswordReset from './components/auth/AuthPasswordReset.js'
import PasswordReset from './components/auth/PasswordReset.jsx'
import Register from './components/auth/Register.jsx'
import { requireAuth,noRequireAuth } from './components/utils/AuthService';
import * as actionCreators from './actions/actionCreators'
import * as groupActions from './actions/groupActions'
import Default from './components/dashboard/Default.jsx'
import NewMessage from './components/dashboard/message/NewMessage.jsx'
import AuthUserGroups from './components/dashboard/user/AuthUserGroups'
import GroupMessages from './components/dashboard/message/GroupMessages.jsx'
import SearchResultUser from './components/dashboard/search/user/SearchResultUser'
import NewGroup from './components/dashboard/group/NewGroup.jsx'
import Home from './components/static/home/Home'
import Tester from './components/Tester.jsx'
import store,{history} from './store.js';



const Root = () => {
  return (
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/dashboard" component={App} onEnter={requireAuth}>
                   <IndexRoute component={Default}></IndexRoute>
                   <Route path='/groups' component={AuthUserGroups}></Route>
                   <Route path='/message' component={NewMessage}></Route>
                   <Route path='/new/group' component={NewGroup}></Route>
                   <Route path='/test' component={Tester}></Route>
                   <Route path='/group/:id/messages' component={GroupMessages}></Route>
                   <Route path='/search' component={SearchResultUser}></Route>
                   <Route path="/password_reset" component={PasswordReset} onEnter={noRequireAuth}/>
                </Route>

                <Route path="/login" component={AuthLogin} onEnter={noRequireAuth}/>
                <Route path="/register" component={AuthRegister} onEnter={noRequireAuth}/>
                <Route path="/password/reset" component={AuthResetPassword} onEnter={noRequireAuth}/>
                <Route path="/reset/password/:token" component={AuthPasswordReset} onEnter={noRequireAuth}/>
                <Route path="/home" component={Home}/>
                
            </Router>
        </Provider>
        
    </div>
  )
}

ReactDOM.render(
    <Root />,
    document.getElementById('app')
)

