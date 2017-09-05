/*eslint-disable */
import { FETCH_USER_GROUPS,GROUPS_HAS_ERROR,GROUPS_IS_LOADING,CREATE_GROUP } from '../actions/actionCreators';


const groups = (state = [], action) => {
    switch(action.type)
    {
      case FETCH_USER_GROUPS:
        return action.groups;
      case CREATE_GROUP:
      //adds the new group to the current group state//
        return [
            ...state,{
                name:action.name,
                description:action.description
            }];  
      default:
        return state     
    }
};

export const groupIsLoading=(state=false,action)=>{
    switch(action.type)
    {
        case GROUPS_IS_LOADING:
            return action.groupIsLoading
        default:
            return state    
    }
}

export const groupHasError=(state=false,action)=>{
    switch(action.type)
    {
        case GROUPS_HAS_ERROR:
            return action.hasError
        default:
            return state    
    }
}

export default groups;