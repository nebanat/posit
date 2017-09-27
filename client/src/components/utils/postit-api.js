/*eslint-disable */
import axios from 'axios';
import { getAccessId, getAccessToken } from './AuthService';


export { getUserGroups,
   createNewGroup, 
   createNewMessage, 
   getGroupMessages,
   getAllUsers,
   getGroupUsers,
   getSearchedUsers,
   addUserToGroup,
   getSearchedUsersNotInAGroup,
   loginUser,
   registerUser,
   sendResetPasswordLink  };

function getUserGroups() {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/api/user/groups',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'id-token': getAccessId(),
      'x-access-token': getAccessToken()
    }
  });
}

function createNewGroup(groupName, groupDescription) {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/api/group',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      name: groupName,
      description: groupDescription
    })
  });
}

function createNewMessage(message, priority, groupId) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/group/${groupId}/message`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      content: message,
      priority
    })
  });
}
function getGroupMessages(groupId) {
  return axios({
    method: 'GET',
    url: `http://localhost:3000/api/group/${groupId}/message`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'id-token': getAccessId(),
      'x-access-token': getAccessToken()
    }
  });
}

function getAllUsers (){
    return axios({
    method: 'GET',
    url: 'http://localhost:3000/api/user/all',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'id-token': getAccessId(),
      'x-access-token': getAccessToken()
    }
  });

}

function getGroupUsers (groupId){
    return axios({
    method: 'GET',
    url: `http://localhost:3000/api/group/${groupId}/users`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'id-token': getAccessId(),
      'x-access-token': getAccessToken()
    }
  });

}

function getSearchedUsers(user){
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/user/search`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      query:user,
    })
  }); 
}

function getSearchedUsersNotInAGroup(groupId,user){
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/user/get/search`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      groupId:groupId,
      query:user
    })
  }); 
}

function addUserToGroup(groupId,userId) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/group/${groupId}/user`,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
      'x-access-token': getAccessToken()
    },
    data: JSON.stringify({
      userId: userId,
    })
  });
}

function loginUser(username,password){
   return axios({
      method: 'post',
      url: 'http://localhost:3000/api/user/signin',
      headers:{
          'Content-type':'application/json; charset=utf-8'
      },
      data:JSON.stringify({
      "username":username,
      "password":password
        }) 
    })
}

function registerUser(username,email,password){
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/signup',
        headers:{
            'Content-type':'application/json; charset=utf-8'
        },
        data:JSON.stringify({
        "username": username,
        "email": email,
        "password":password
          }) 
      })
}

function sendResetPasswordLink(email){
  return axios({
      method: 'post',
      url: 'http://localhost:3000/api/user/password/reset',
      headers:{
          'Content-type':'application/json; charset=utf-8'
      },
      data:JSON.stringify({
        "email": email,
      }) 
    })
}



