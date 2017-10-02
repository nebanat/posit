import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Dashboard from './dashboard/Dashboard.jsx';

/**
 *  maps state to props
 * @param {state} state 
 * @returns {state} state 
 */
function mapStateToProps(state) {
  const { groups, messages, users,
    groupIsLoading, groupUsers, searchUsers, authUser } = state;

  return {
    groups,
    messages,
    users,
    groupIsLoading,
    groupUsers,
    searchUsers,
    authUser,
  };
}
/**
 *  maps dispatch to props
 * @param {dispatch} dispatch
 * @returns {bindActionCreator} bindActionCreator 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default App;
