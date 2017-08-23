/*eslint-disable */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.jsx';

function mapStateToProps(state) {
  return {
    groups: state.groups,
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
