/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { isLoggedIn, logout } from '../utils/AuthService'
//import SearchUser from '../dashboard/search/user/SearchUser'

class Navigation extends React.Component{
    render(){
        return (
            <div className="navbar-fixed">
            
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!" className="black-text">Profile</a></li>
                <li className="divider"></li>
                <li><Link className="black-text" onClick={()=>logout()} to="/login">Logout</Link></li>
            </ul>
                <nav className='white'>
                    
                    <div className="nav-wrapper">
                        <div className="row">
                            
                           
                            <div className="col s8 push-s4">

                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li className="black-text">
                                        
                                    </li>
                                    <li>
                                        <Link to="/home" className="black-text">Home</Link>
                                    </li>
                                    <li>
                                    {
                                        (isLoggedIn())?(<Link to="/" className="black-text">Dashboard</Link>):('')
                                    }
                                    </li>
                                    <li>
                                    {
                                        (isLoggedIn())?(<Link className="btn waves-effect waves-light white black-text" to="/new/group">
                                                            New Group</Link>):('')
                                    }
                                    </li>
                                    
                                    <li>
                                    {
                                        (!isLoggedIn())?(<Link className="black-text"  to="/login">Log In</Link>):('')
                                    }
                                    
                                    </li>       
                                    <li>
                                    {
                                        (!isLoggedIn())?(<Link className="btn white black-text" to="/register">Get Started</Link>):('')
                                    }
                                    </li>
                                    <li>
                                    {
                                        (isLoggedIn()) ? (<a className="dropdown-button black-text" href="#!" data-activates="dropdown1">
                                            djcranker
                                            <i className="material-icons right">arrow_drop_down</i></a>):('')
                                    }
                                    </li>
                                </ul>

                            </div>
                        </div>
                        
                        
                    </div>
                </nav>
            </div>

        );
    }

}
export default Navigation

