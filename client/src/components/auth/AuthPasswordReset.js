/* eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import PasswordReset from './PasswordReset.jsx';

function mapStateToProps(state) {
  return {
    groupIsLoading: state.groupIsLoading,
    passwordResetErrorMessage: state.passwordResetErrorMessage,
    passwordResetSuccessMessage: state.passwordResetSuccessMessage
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthPasswordReset = connect(mapStateToProps, mapDispatchToProps)(PasswordReset);

export default AuthPasswordReset;