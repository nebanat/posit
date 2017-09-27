/*eslint-disable */
import { FETCH_USERS,
  USERS_IS_LOADING,
  USERS_HAS_ERROR,
  FETCH_SEARCH_USERS,
  ADD_USER_TO_GROUP,
  LOGIN_USER,
  PERSIST_STATE,
  LOGIN_FAILURE,SIGNUP_USER,SIGNUP_FAILURE,
  RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAILURE } from '../actions/actionCreators';

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state;
  }
};
export const userIsLoading = (state = false, action) => {
  switch (action.type) {
    case USERS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export const userHasError = (state = false, action) => {
  switch (action.type) {
    case USERS_HAS_ERROR:
      return action.hasError;
    default:
      return state;
  }
};
export const searchUsers = (state = [], action) => {
  switch (action.type) {
    case FETCH_SEARCH_USERS:
      return action.searchUsers;
    default:
      return state;
  }
};

export const authUser = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.authUser;
    default:
      return state;
  }
};

export const loginErrorMessage = (state =[],action)=>{
    switch (action.type) {
        case LOGIN_FAILURE:
            return action.loginErrorMessage;
        default:
            return state;      
    }
}

export const registerSuccessMessage = (state =[],action)=>{
  switch (action.type) {
      case SIGNUP_USER:
          return action.registerSuccessMessage;
      default:
          return state;      
  }
}

export const registerErrorMessage = (state =[],action)=>{
  switch (action.type) {
      case SIGNUP_FAILURE:
          return action.registerErrorMessage;
      default:
          return state;      
  }
}

export const resetPasswordSuccessMessage = (state =[],action)=>{
  switch (action.type) {
      case RESET_PASSWORD_SUCCESS:
          return action.resetPasswordSuccessMessage;
      default:
          return state;      
  }
}

export const resetPasswordErrorMessage = (state =[],action)=>{
  switch (action.type) {
      case RESET_PASSWORD_FAILURE:
          return action.resetPasswordErrorMessage;
      default:
          return state;      
  }
}
// export const persist = (state = [], action) => {
//   switch (action.type) {
//     case PERSIST_STATE:
//       return {
//         ...state,
//         persistedState: action.payload
//       };
//     default:
//       return state;
//   }
// };


export default users;
