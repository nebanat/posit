/*eslint-disable */
import { FETCH_MESSAGES } from '../actions/actionCreators';

const messages = (state = [], action) => {
    switch(action.type)
    {
     case FETCH_MESSAGES:
        return action.messages
        // return action.messages   
     default:
        return state     
    }
};

export default messages;