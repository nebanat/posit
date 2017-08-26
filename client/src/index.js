/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import { Router, Route,IndexRoute,browserHistory } from 'react-router';
import { requireAuth } from './components/utils/AuthService';
import {Provider} from 'react-redux'
import configureStore from './store'
import { syncHistoryWithStore } from 'react-router-redux';
import * as actionCreators from './actions/actionCreators'
import Default from './components/dashboard/Default.jsx'
import NewMessage from './components/dashboard/message/NewMessage.jsx'
import NewGroup from './components/dashboard/group/NewGroup.jsx'
import Tester from './components/Tester.jsx'
import store,{history} from './store.js';



//const store = configureStore()

//const history = syncHistoryWithStore(browserHistory, store);

//store.dispatch(actionCreators.fetchUserGroups())

const Root = () => {
  return (
    <div>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} onEnter={requireAuth}>
                   <IndexRoute component={Default}></IndexRoute>
                   <Route path='/message' component={NewMessage}></Route>
                   <Route path='/new/group' component={NewGroup}></Route>
                   <Route path='/test' component={Tester}></Route>
                </Route>

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

