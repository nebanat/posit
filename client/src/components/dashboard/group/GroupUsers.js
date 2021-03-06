/*eslint-disable */
import React from 'react';
import SingleUser from './SingleUser'

class GroupUsers extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
       return(
            <div>
                <div className="row">
                    <div className="col s12">
                        <ul className="collection">
                            {
                                this.props.groupUsers.map((user,i)=>
                                    <SingleUser key={i} i={i} user={user}/>
                                )
                            }
                        </ul>

                    </div>
                </div>
                
            </div>
           )
    }
}

export default GroupUsers;