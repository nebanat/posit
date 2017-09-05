/*eslint-disable */
import { FETCH_USERS, USERS_IS_LOADING , USERS_HAS_ERROR } from '../actions/actionCreators';

const users = (state = [], action) => {
    switch(action.type)
    {
     case FETCH_USERS:
        return action.users
     default:
        return state     
    }
};
export const userIsLoading=(state=false,action)=>{
    switch(action.type)
    {
        case USERS_IS_LOADING:
            return action.isLoading
        default:
            return state    
    }
}

export const userHasError=(state=false,action)=>{
    switch(action.type)
    {
        case USERS_HAS_ERROR:
            return action.hasError
        default:
            return state    
    }
}
export default users;