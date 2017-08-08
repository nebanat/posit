/*eslint-disable */
import axios from 'axios';
import {getAccessId,getAccessToken} from './AuthService'


export {getUserGroups,createNewGroup,createNewMessage,getGroupMessages};

function getUserGroups() {
  
  return axios({
        method:'GET',
        url: 'http://localhost:3000/api/user/groups',
        headers:{
            'Content-type':'application/json; charset=utf-8',
            'id-token':getAccessId(),
            'x-access-token':getAccessToken()
        } 
        })
}

function createNewGroup(groupName,groupDescription){
    
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/group',
        headers:{
            'Content-type':'application/json; charset=utf-8',
            'x-access-token':getAccessToken()
        },
         data:JSON.stringify({
         "name": groupName,
         "description":groupDescription
          }) 
        })

}
function createNewMessage(message,priority,groupId){
    return axios({
        method: 'post',
        url: `http://localhost:3000/api/group/${groupId}/message`,
        headers:{
            'Content-type':'application/json; charset=utf-8',
            'x-access-token':getAccessToken()
        },
         data:JSON.stringify({
         "content": message,
         "priority":priority
          }) 
        })

} 
function getGroupMessages(groupId){
     return axios({
        method:'GET',
        url: `http://localhost:3000/api/group/${groupId}/message`,
        headers:{
            'Content-type':'application/json; charset=utf-8',
            'id-token':getAccessId(),
            'x-access-token':getAccessToken()
            } 
        })
}

      

