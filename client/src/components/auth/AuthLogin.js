import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Login from './Login.jsx';

/**
 * 
 * @param {state} state 
 * @return {state} state
 */
function mapStateToProps(state) {
  const { groupIsLoading, loginErrorMessage } = state;
  return {
    groupIsLoading,
    loginErrorMessage
  };
}

/**
 * 
 * @param {dispatch} dispatch 
 * @return {bindActionCreator} bindActionCreator
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default AuthLogin;
