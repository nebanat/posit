/*eslint-disable */
import { browserHistory } from 'react-router';
import decode from 'jwt-decode';
// check if the user is authenticated//
// make sure pages other login,register are protected

export function getAccessToken() {
  return localStorage.getItem('POSTIT_ACCESS_TOKEN');
}

export function isLoggedIn() {
  // future check if token is expired//
  const accessToken = getAccessToken();
  return !!accessToken;
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/login' });
  }
}
export function noRequireAuth(nextState,replace){
    if(isLoggedIn()){
      replace({pathname:'/'});
    }
}
export function clearAccessToken(){
    localStorage.removeItem('POSTIT_ACCESS_TOKEN');
}
export function logout(){
    clearAccessToken();
    browserHistory.push('/login')
}
export function getAccessId(accessToken){
  const token = decode(localStorage.getItem('POSTIT_ACCESS_TOKEN'));
  const accessId = token.user.id;
  
  return accessId
}  