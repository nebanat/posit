/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import GroupInfo from './group/GroupInfo.jsx';

class Navigation extends React.Component{
    render(){
        return (
            <div className='navbar-fixed'>
                <nav className='navbar teal'>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="index.html">#POSTIT</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>        
                        
                    </div>
                </nav>
            </div>

        );
    }

}
export default Navigation

