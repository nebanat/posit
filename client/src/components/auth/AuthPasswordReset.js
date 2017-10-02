import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import PasswordReset from './PasswordReset.jsx';

/**
 * 
 * @param {state} state
 * @return {state} state 
 */
function mapStateToProps(state) {
  const { groupIsLoading, passwordResetErrorMessage,
    passwordResetSuccessMessage } = state;

  return {
    groupIsLoading,
    passwordResetErrorMessage,
    passwordResetSuccessMessage
  };
}

/**
 * 
 * @param {dispatch} dispatch 
 * @return {bindActionCreators} bindActionCreators
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthPasswordReset = connect(mapStateToProps,
  mapDispatchToProps)(PasswordReset);

export default AuthPasswordReset;
