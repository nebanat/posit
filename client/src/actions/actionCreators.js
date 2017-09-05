/*eslint-disable */
import { getUserGroups,
         getAllUsers,
         createNewGroup,
         getGroupMessages,createNewMessage } from '../components/utils/postit-api'

//actions//
export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const FETCH_USERS='FETCH_USERS';
export const FETCH_MESSAGES='FETCH_MESSAGES';
export const GROUPS_IS_LOADING='GROUPS_IS_LOADING';
export const GROUPS_HAS_ERROR='GROUPS_HAS_ERROR';
export const USERS_IS_LOADING='USERS_IS_LOADING';
export const USERS_HAS_ERROR='USERS_HAS_ERROR';
export const MESSAGES_IS_LOADING='MESSAGES_IS_LOADING';
export const MESSAGES_HAS_ERROR='MESSAGES_HAS_ERROR';
export const CREATE_GROUP='CREATE_GROUP';

//fetches the authenticated user groups//
export const fetchUserGroups=()=> 
{
   return (dispatch)=>{
    dispatch(groupsIsLoading(true))

     return getUserGroups().then((response)=>{
          
      dispatch(fetchUserGroupsSuccess(response.data['userGroups']))

      dispatch(groupsIsLoading(false))

  })

   }
}

export const fetchUserGroupsSuccess=(groups)=>
{
  return {
    type: FETCH_USER_GROUPS,
    groups
  }
}

export const fetchUsers=()=> 
{
   return (dispatch)=>{
     dispatch(usersIsLoading(true))

     return getAllUsers().then((response)=>{
          
      dispatch(fetchUsersSuccess(response.data))

      dispatch(usersIsLoading(false))
    
    })

   }
}

export const fetchUsersSuccess=(users)=>{
  return {
    type:FETCH_USERS,
    users
  }
}

export const createGroup=(name,description)=>{
  return (dispatch)=>{
    dispatch(groupsIsLoading(true))

     return createNewGroup(name,description).then((response)=>{
          
      dispatch(createGroupSuccess(response.data.name,response.data.description))

      dispatch(groupsIsLoading(false))

  })

  }
}

export const createGroupSuccess=(name,description)=>{
  return {
    type:CREATE_GROUP,
    name,
    description
  }
}


export const fetchMessagesSuccess=(messages)=>{
  return {
    type:FETCH_MESSAGES,
    messages
  }
}

export const fetchMessages=(id)=>{
  return (dispatch)=>{
    dispatch(groupsIsLoading(true))

    return getGroupMessages(id).then((response)=>{
         
     dispatch(fetchMessagesSuccess(response.data))

     dispatch(groupsIsLoading(false))
   
   })

  }
}

export const createMessage=(message,priority,groupId)=>{
   return (dispatch)=>{
    dispatch(groupsIsLoading(true))

    return createNewMessage(message,priority,groupId).then((response)=>{
         
     //dispatch(fetchMessagesSuccess(response.data))

     dispatch(groupsIsLoading(false))
   
   })

  }

}


export const groupsIsLoading=(bool)=>{
  return {
    type:GROUPS_IS_LOADING,
    groupIsLoading:bool
  }

}

export const groupsHasError=(bool)=>{
  return {
    type:GROUPS_HAS_ERROR,
    hasError:bool
  }

}
export const usersIsLoading=(bool)=>{
    return {
    type:USERS_IS_LOADING,
    isLoading:bool
  }
  
}

export const usersHasError=(bool)=>{
  return {
    type:USERS_HAS_ERROR,
    hasError:bool
  }

}
export const messagesIsLoading=(bool)=>{
  return {
    type:MESSAGES_IS_LOADING,
    isLoading:bool
  }

}

export const messagesHasError=(bool)=>{
  return {
    type:MESSAGES_HAS_ERROR,
    hasError:bool
  }
}


