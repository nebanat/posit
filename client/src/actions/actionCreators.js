/*eslint-disable */
import { getUserGroups } from '../components/utils/postit-api'

export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';

export const fetchUserGroups=()=> 
{
   return (dispatch)=>{
     return getUserGroups().then((response)=>{
          
      dispatch(fetchUserGroupsSuccess(response.data))

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

