/*eslint-disable */
const ADD_GROUP = 'ADD_GROUP';
const ADD_MESSAGE = 'ADD_MESSAGE';

export function addGroup(groupName, groupDescription) {
  return {
    type: ADD_GROUP,
    groupName,
    groupDescription,
  };
}

export function addMessage(message,priority,groupId) {
    /*this will add a message */
    return {
        type:ADD_MESSAGE,
        message,
        priority,
        groupId
    }
}
