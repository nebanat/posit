import React from 'react';
import { Link } from 'react-router'

class SingleUser extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    
    render()
    {
        const {user,groupId}=this.props
        return(
            <div>
               <li className="collection-item">
                    <i className="tiny material-icons">account_circle</i>
                        <span>{user.username}</span><br/>
                        <span className="push-s1"> 
                            <a onClick={()=>this.props.addUserGroup(groupId,user.id)} className="btn-small purple-text white">
                                Add <i className="tiny material-icons white-text">add</i>
                            </a>
                        </span>
                </li>
            </div>
           )
    }
}

export default SingleUser;