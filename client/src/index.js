import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import Login from './components/auth/Login.jsx'
import ResetPassword from './components/auth/ResetPassword.js'
import Register from './components/auth/Register.jsx'
import { Router, Route,IndexRoute,browserHistory } from 'react-router';
import { requireAuth } from './components/utils/AuthService';
import {Provider} from 'react-redux'
//import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux';
import * as actionCreators from './actions/actionCreators'
import * as groupActions from './actions/groupActions'
import Default from './components/dashboard/Default.jsx'
import NewMessage from './components/dashboard/message/NewMessage.jsx'
import AuthUserGroups from './components/dashboard/user/AuthUserGroups'
import GroupMessages from './components/dashboard/message/GroupMessages.jsx'
import NewGroup from './components/dashboard/group/NewGroup.jsx'
import Home from './components/static/home/Home'
import Tester from './components/Tester.jsx'
import store,{history} from './store.js';



const Root = () => {
  return (
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} onEnter={requireAuth}>
                   <IndexRoute component={Default}></IndexRoute>
                   <Route path='/groups' component={AuthUserGroups}></Route>
                   <Route path='/message' component={NewMessage}></Route>
                   <Route path='/new/group' component={NewGroup}></Route>
                   <Route path='/test' component={Tester}></Route>
                   <Route path='/group/:id/messages' component={GroupMessages}></Route>
                </Route>

                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/password/reset" component={ResetPassword}/>
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

