import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import ResetPassword from './ResetPassword.jsx';

/**
 * 
 * @param {state} state
 * @return {state} state 
 */
function mapStateToProps(state) {
  const { groupIsLoading, resetPasswordErrorMessage,
    resetPasswordSuccessMessage } = state;

  return {
    groupIsLoading,
    resetPasswordErrorMessage,
    resetPasswordSuccessMessage
  };
}
/**
 * 
 * @param {dispatch} dispatch
 * @return {bindActionCreator} bindActionCreators 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthResetPassword = connect(mapStateToProps,
  mapDispatchToProps)(ResetPassword);

export default AuthResetPassword;
