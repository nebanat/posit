/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import GroupInfo from './group/GroupInfo.jsx';

class Navigation extends React.Component{
    render(){
        return (
            <div className='navbar-fixed'>
                <nav className='white'>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">#</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='nav-body white dark-text'>
                        <p></p>
                    </div>
                 </nav>
            </div>

        );
    }

}
export default Navigation

