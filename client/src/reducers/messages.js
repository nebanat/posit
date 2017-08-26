/*eslint-disable */
import { FETCH_MESSAGES } from '../actions/actionCreators';

const messages = (state = [], action) => {
    switch(action.type)
    {
     case FETCH_MESSAGES:
        console.log("messages fetched");
        return state   
     default:
        return state     
    }
};

export default messages;