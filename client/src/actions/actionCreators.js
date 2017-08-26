/*eslint-disable */
import { getUserGroups,getAllUsers } from '../components/utils/postit-api'

export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const FETCH_USERS='FETCH_USERS';
export const FETCH_MESSAGES='FETCH_MESSAGES';
export const GROUPS_IS_LOADING='GROUPS_IS_LOADING';
export const GROUPS_HAS_ERROR='GROUPS_HAS_ERROR';
export const USERS_IS_LOADING='USERS_IS_LOADING';
export const USERS_HAS_ERROR='USERS_HAS_ERROR';
export const MESSAGES_IS_LOADING='MESSAGES_IS_LOADING'
export const MESSAGES_HAS_ERROR='MESSAGES_HAS_ERROR'

export const fetchUserGroups=()=> 
{
   return (dispatch)=>{
     return getUserGroups().then((response)=>{
          
      dispatch(fetchUserGroupsSuccess(response.data['userGroups']))

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
     return getAllUsers().then((response)=>{
          
      dispatch(fetchUsersSuccess(response.data))

  })

   }
}

export const fetchUsersSuccess=(users)=>{
  return {
    type:FETCH_USERS,
    users
  }
}

export const fetchMessages=(messages)=>{
  return {
    type:FETCH_MESSAGES,
    messages
  }
}

export const groupsIsLoading=(bool)=>{
  return {
    type:GROUPS_IS_LOADING,
    isLoading:bool
  }

}

export const groupsHasError=(bool)=>{
  return {
    type:GROUPS_HAS_ERROR,
    hasError:bool
  }

}
export const UsersIsLoading=(bool)=>{
    return {
    type:USERS_IS_LOADING,
    isLoading:bool
  }
  
}

export const UsersHasError=(bool)=>{
  return {
    type:USERS_HAS_ERROR,
    hasError:bool
  }

}
export const MessagesIsLoading=(bool)=>{
  return {
    type:MESSAGES_IS_LOADING,
    isLoading:bool
  }

}

export const MessagesHasError=(bool)=>{
  return {
    type:MESSAGES_HAS_ERROR,
    hasError:bool
  }
}


