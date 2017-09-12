import React from 'react';
import SingleUserGroup from './SingleUserGroup'


class AuthUserGroups extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    
    render()
    {
       
        return(
            <div>
                <h4>Your Groups</h4>

                <div className="row">
                    {
                        this.props.groups.map((group,i)=>
                            <SingleUserGroup key={i} i={i} group={group}/> )
                    }
                   
                </div>
                
             
            </div>
           )
    }
}

export default AuthUserGroups;