/*eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Dashboard from './dashboard/Dashboard.jsx';

function mapStateToProps(state) {
  return {
    groups: state.groups,
    messages: state.messages,
    users:state.users,
    groupIsLoading:state.groupIsLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default App;
