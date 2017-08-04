/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import GroupInfo from './group/GroupInfo.jsx';
import { Link } from 'react-router';

class Navigation extends React.Component{
    render(){
        return (
            <div className="navbar-fixed">
            
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">Profile</a></li>
                <li className="divider"></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
                <nav className='teal'>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">#PostIt</a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li>
                                <a className="dropdown-button" href="#!" data-activates="dropdown1">djcranker
                                    <i className="material-icons right">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }

}
export default Navigation

