import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Register from './Register.jsx';

/**
 * 
 * @param {state} state
 * @return {state} state 
 */
function mapStateToProps(state) {
  const { groupIsLoading, registerErrorMessage, registerSuccessMessage } = state;
  return {
    groupIsLoading,
    registerErrorMessage,
    registerSuccessMessage
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
const AuthRegister = connect(mapStateToProps, mapDispatchToProps)(Register);

export default AuthRegister;
