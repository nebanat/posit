/* eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Login from './Login.jsx';

function mapStateToProps(state) {
  return {
    groupIsLoading: state.groupIsLoading,
    loginErrorMessage: state.loginErrorMessage
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default AuthLogin;
