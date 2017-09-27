/*eslint-disable */
import { browserHistory } from 'react-router';
import { getUserGroups,
  getAllUsers,
  createNewGroup,
  getGroupMessages,
  createNewMessage,
  getGroupUsers,
  addUserToGroup,
  getSearchedUsersNotInAGroup,
  loginUser, registerUser,sendResetPasswordLink } from '../components/utils/postit-api';

// actions//
export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const GROUPS_IS_LOADING = 'GROUPS_IS_LOADING';
export const GROUPS_HAS_ERROR = 'GROUPS_HAS_ERROR';
export const USERS_IS_LOADING = 'USERS_IS_LOADING';
export const USERS_HAS_ERROR = 'USERS_HAS_ERROR';
export const MESSAGES_IS_LOADING = 'MESSAGES_IS_LOADING';
export const MESSAGES_HAS_ERROR = 'MESSAGES_HAS_ERROR';
export const CREATE_GROUP = 'CREATE_GROUP';
export const FETCH_GROUP_USERS = 'FETCH_GROUP_USERS';
export const FETCH_SEARCH_USERS = 'FETCH_SEARCH_USERS';
export const ADD_USER_TO_GROUP = 'ADD_USER_TO_GROUP';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
export const PERSIST_STATE = 'persist/Hydrate';

export const usersIsLoading = bool => ({
  type: USERS_IS_LOADING,
  isLoading: bool
});

export const groupsIsLoading = bool => ({
  type: GROUPS_IS_LOADING,
  groupIsLoading: bool
});
// logUserInAction//
export const logUserInSuccess = authUser => ({
  type: LOGIN_USER,
  authUser
});

export const logUserInFail = loginErrorMessage => ({
  type: LOGIN_FAILURE,
  loginErrorMessage
});

export const signUpUserSuccess = registerSuccessMessage => ({
  type: SIGNUP_USER,
  registerSuccessMessage
});

export const signUpUserError = registerErrorMessage => ({
  type: SIGNUP_FAILURE,
  registerErrorMessage
});

export const sendResetPasswordSuccess =resetPasswordSuccessMessage =>({
  type: RESET_PASSWORD_SUCCESS,
  resetPasswordSuccessMessage
});

export const sendResetPasswordFailure =resetPasswordErrorMessage =>({
  type: RESET_PASSWORD_FAILURE,
  resetPasswordErrorMessage
})

export const signUpUser = (username, email, password) => (dispatch) => {
  return registerUser(username, email, password).then((response) => {
    if(response.status===201){
      dispatch(signUpUserSuccess(response.data.message));
      dispatch(signUpUserError(" "));
    }
  })
    .catch((error)=>{
      if(error.response.status){
        dispatch(signUpUserError(error.response.data.message));
        dispatch(signUpUserSuccess(" "))
      }
    });
};

export const logUserIn = (username, password) =>
  dispatch => loginUser(username, password).then((response) => {
    if (response.status === 200) {
      localStorage.setItem('POSTIT_ACCESS_TOKEN', response.data.token);

      // console.log(response.status);
      browserHistory.push({
        pathname: '/dashboard',
      });
      dispatch(logUserInSuccess(response.data.user));
      dispatch(logUserInFail(''));
    }
  }).catch((error) => {
    if (error.response.status) {
      dispatch(logUserInFail(error.response.data.message));
    }
  });

  export const sendResetPassword = (email) => (dispatch) => {
    const msg =" ";
    dispatch(groupsIsLoading(true));//dispatches its loading//

    return sendResetPasswordLink(email).then((response) => {
      if(response.status === 200){
        dispatch(sendResetPasswordSuccess(response.data.message));
        //dispatch(signUpUserError(" "));
        dispatch(sendResetPasswordFailure(msg))
        dispatch(groupsIsLoading(false));
      }
    })
      .catch((error)=>{
        if(error.response.status){
          dispatch(sendResetPasswordFailure(error.response.data.message));
          dispatch(sendResetPasswordSuccess(msg))
          //dispatch(signUpUserSuccess(" "))
          dispatch(groupsIsLoading(false)); 
        }
      });
  };  

// fetches the authenticated user groups//
export const fetchUserGroupsSuccess = groups => ({
  type: FETCH_USER_GROUPS,
  groups
});

export const fetchUserGroups = () =>
  (dispatch) => {
    dispatch(groupsIsLoading(true));

    return getUserGroups().then((response) => {
      dispatch(fetchUserGroupsSuccess(response.data));

      dispatch(groupsIsLoading(false));
    });
  };

// fetch application users  
export const fetchUsersSuccess = users => ({
  type: FETCH_USERS,
  users
});

export const fetchUsers = () =>
  (dispatch) => {
    dispatch(usersIsLoading(true));

    return getAllUsers().then((response) => {
      dispatch(fetchUsersSuccess(response.data));

      dispatch(usersIsLoading(false));
    });
  };

// create group action creator  
export const createGroupSuccess = (name, description) => ({
  type: CREATE_GROUP,
  name,
  description
});

export const createGroup = (name, description) => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return createNewGroup(name, description).then((response) => {
    dispatch(createGroupSuccess(response.data.name, response.data.description));

    dispatch(groupsIsLoading(false));
  });
};

// fetch group messages 
export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES,
  messages
});

export const fetchMessages = id => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return getGroupMessages(id).then((response) => {
    dispatch(fetchMessagesSuccess(response.data));

    dispatch(groupsIsLoading(false));
  });
};

export const createMessage = (message, priority, groupId) => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return createNewMessage(message, priority, groupId).then(() => {
    // dispatch(fetchMessagesSuccess(response.data))

    dispatch(groupsIsLoading(false));
  });
};

// fetch group users
export const fetchGroupUsersSuccess = groupUsers => ({
  type: FETCH_GROUP_USERS,
  groupUsers
});

export const fetchGroupUsers = id => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return getGroupUsers(id).then((response) => {
    dispatch(fetchGroupUsersSuccess(response.data));

    dispatch(groupsIsLoading(false));
  });
};

// fetch searched users 
export const fetchSearchUsersSuccess = searchUsers => ({
  type: FETCH_SEARCH_USERS,
  searchUsers
});

export const fetchSearchUsers = (groupId, query) => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return getSearchedUsersNotInAGroup(groupId, query).then((response) => {
    // console.log(response.status);
    if (response.status === 200) {
      dispatch(fetchSearchUsersSuccess(response.data));

      dispatch(groupsIsLoading(false));
    }

    dispatch(groupsIsLoading(false));
  });
};

// add user to group action creator
export const addUserGroup = (groupId, userId) => (dispatch) => {
  dispatch(groupsIsLoading(true));

  return addUserToGroup(groupId, userId).then(() => {
    // dispatch(addUserGroupSuccess(response.data.user))

    dispatch(groupsIsLoading(false));
  });
};

export const groupsHasError = bool => ({
  type: GROUPS_HAS_ERROR,
  hasError: bool
});

export const usersHasError = bool => ({
  type: USERS_HAS_ERROR,
  hasError: bool
});
export const messagesIsLoading = bool => ({
  type: MESSAGES_IS_LOADING,
  isLoading: bool
});

export const messagesHasError = bool => ({
  type: MESSAGES_HAS_ERROR,
  hasError: bool
});

