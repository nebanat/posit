/*eslint-disable */
import { FETCH_USER_GROUPS } from '../actions/actionCreators';


export default (state = [], action) => {
    switch(action.type)
    {
      case FETCH_USER_GROUPS:
        return action.groups;
      default:
        return state     
    }
};
