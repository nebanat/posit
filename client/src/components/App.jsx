/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/Dashboard.jsx'
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
      super(props);

      this.setSelectedGroup=this.setSelectedGroup.bind(this);
      this.createGroup=this.createGroup.bind(this);

      this.state={
        userGroups:[
          {"id":1,
          "name":"NodeJs",
          "description":"This is a NodeJs description",
          "messages": [
            { "content":"npm package manager is the bomb,hosting on heroku not so much", "priority":1,"user":"ashambilly" },
            { "content":"finding it difficult to use sequelize,help me with tutorial", "priority":2,"user":"babagloria"}
            ]},
          {"id":2,
          "name":"Laravel Ninjas",
          "description":"This is a Laravel Ninja description",
          "messages": [
            { "content":"Una dey play,Taylor Otwell na my padi","id":1,"priority":3,"user":"djcranker" },
            { "content":"Having problems with controllers someone help","id":2, "priority":2,"user":"bababeebest" }
            ]},  
          
          ],
        userInfo:{"username":"nebanat","email":"abiliyok@gmail.com"},
        active:null,
        selectedGroup:[],
        users:[]
        
      }
    }

    setSelectedGroup(group){
      if(!group){
        return this.setState({selectedGroup:{"name":"No group","description":"no description"}})
      }
       return this.setState({active:group.id,selectedGroup:group})
       
    }
    createGroup(value){
      this.setState((prevState) => ({
      userGroups: prevState.userGroups.concat(value),
      
    }));
    }  
    
    componentDidMount(){
      axios({
        method:'get',
        url:'http://localhost:3000/api/user/all',
      })
      .then(function (response) {
        console.log(response);
    })
        
    }

     render(){
         return (
           <div>
             <Dashboard {...this.state}
             selectGroup={this.setSelectedGroup}
             createGroup={this.createGroup}/>
           </div>
         );
     }
}

App.defaultProps={
  defaultSelectedGroup:''
}

export default App;