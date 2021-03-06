/* eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Register from './Register.jsx';

function mapStateToProps(state) {
  return {
    groupIsLoading: state.groupIsLoading,
    registerErrorMessage: state.registerErrorMessage,
    registerSuccessMessage: state.registerSuccessMessage
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const AuthRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default AuthRegister;
