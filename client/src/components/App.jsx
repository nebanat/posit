/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/Dashboard.jsx'
import PropTypes from 'prop-types';

class App extends React.Component{
    constructor(props){
      super(props);

      this.state={
        userGroups:[],
        userInfo:{
          username:'nebanat',
          email:'abiliyok@gmail.com',
        }
      }
    }
     render(){
         return (
           <div>
             <Dashboard {...this.state}/>
           </div>
         );
     }
}

App.defaultProps={
  appName:'Posit'
}

export default App;