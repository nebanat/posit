/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';


class UserInfo extends React.Component{
    render(){
        return(
            <div className="user-view teal">
              <a href='#' className='white-text'>#PostIt</a>
              <a href="#!name"><span className="white-text name">{this.props.user.username}</span></a>
              <a href="#!email"><span className="white-text email">{this.props.user.email}</span></a>
            </div>
        )
    }
}

export default UserInfo
