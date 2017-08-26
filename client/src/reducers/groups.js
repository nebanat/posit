/*eslint-disable */
import { FETCH_USER_GROUPS,GROUPS_HAS_ERROR,GROUPS_IS_LOADING } from '../actions/actionCreators';


const groups = (state = [], action) => {
    switch(action.type)
    {
      case FETCH_USER_GROUPS:
        return action.groups;
      default:
        return state     
    }
};

export const groupIsLoading=(state=false,action)=>{
    switch(action.type)
    {
        case GROUPS_IS_LOADING:
            return action.isLoading
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