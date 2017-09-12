import React from 'react';
import {Link} from 'react-router';


class SingleUserGroup extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    
    render()
    {
       
        return(
            <div>
                <div className="col s12 m6">
                        <div className="card white darken-1">
                            <div className="card-content black-text">
                            <span className="card-title"><Link to={`/group/${this.props.group.id}/messages`} className="purple-text darken-4">{this.props.group.name}</Link></span>
                                <p>{this.props.group.description}</p>
                            </div>
                            <div className="card-action">
                                <div className="stats">
                                    <i className="tiny material-icons">access_time</i>  Created 2 days ago
                                </div>
                            </div>
                        </div>
                </div>
            </div>
           )
    }
}

export default SingleUserGroup;