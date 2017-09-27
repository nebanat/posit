/* eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import ResetPassword from './ResetPassword.jsx';

function mapStateToProps(state) {
  return {
    groupIsLoading: state.groupIsLoading,
    resetPasswordErrorMessage: state.resetPasswordErrorMessage,
    resetPasswordSuccessMessage: state.resetPasswordSuccessMessage
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthResetPassword = connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

export default AuthResetPassword;
