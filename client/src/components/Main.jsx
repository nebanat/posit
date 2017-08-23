/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/Dashboard.jsx'
import PropTypes from 'prop-types';
import axios from 'axios';
import {getAccessId,getAccessToken} from './utils/AuthService'
import {getUserGroups,createNewGroup,createNewMessage,getGroupMessages} from './utils/postit-api'
import {browserHistory} from 'react-router';

class App extends React.Component{
    constructor(props){
      super(props);

      this.setSelectedGroup=this.setSelectedGroup.bind(this);
      this.createGroup=this.createGroup.bind(this);

      this.state={
        userGroups:[],
        currentGroupMessages:[],
        userInfo:{"username":"nebanat","email":"abiliyok@gmail.com"},
        active:null,
        selectedGroup:[],
        users:[],
        successMessage:'',
        errorMessage:'',
        messageSuccess:''
        
      }
    }
    //returns the logged in user groups//
    getUserGroups(){
      getUserGroups().then((response)=>{
        this.setState({userGroups:response.data.userGroups});
      })

    }
    //selects a group//
    setSelectedGroup(group){
      if(!group){
        return this.setState({selectedGroup:{"name":"No group","description":"no description"}})
      }
       this.setState({active:group.id,selectedGroup:group});
       this.getGroupMessage(group.id);
       return
       
    }
    //creates a new group//  
    createGroup(groupName,groupDescription){
     createNewGroup(groupName,groupDescription).then((response)=> {
           this.setState({successMessage:'Group created successfully'});
           this.getUserGroups();

          browserHistory.push('/');
        })
        .catch((error)=> {
         this.setState({errorMessage:'Something went wrong.please try again'})
        });

        

    }
    createMessage(message,priority,groupId){
      //creates new message//
      createNewMessage(message,priority,groupId).then((response)=>{
        //replace console log;
        console.log(response.data.message);
        this.getGroupMessage(groupId);

      })
      .catch((error)=>{
        //this.setState({errorMessage:'Something went wrong.please try again'});
        //remove console log;
        console.log(error);
      })

    }
    getGroupMessage(groupId){
      getGroupMessages(groupId).then((response)=>{
        //console.log(response.data);
        this.setState({currentGroupMessages:response.data})

        //console.log(this.state.currentGroupMessages)

        return
      })
    }
    
    componentDidMount(){
      this.getUserGroups();
    }

     render(){
         return (
           <div>
             <Dashboard {...this.state}
             selectGroup={this.setSelectedGroup}
             createGroup={this.createGroup}
             createMessage={this.createMessage}
             //userGroups={this.props.location.state.groups}
             {...this.props}
             />
           </div>
         );
     }
}



export default App;
         