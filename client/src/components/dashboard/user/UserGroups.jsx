/*eslint-disable */
import React,{Component} from 'react';
import Initialize from '../Initialize.js';
import { Link } from 'react-router';

class UserGroups extends Component
{
 
   render()
    {
       return(
           <div>
                <ul id="nav-mobile" className="side-nav fixed black">
                    <h3 className="white-text">PostIt</h3>
                    {
                        this.props.groups.map((group,i)=>
                            <li className="bold" key={i}>
                                <Link to={`/group/messages/${group.id}`} className="white-text">{group.name}</Link>
                            </li>
                        )
                    }
                </ul>
                <a href="#" data-activates="slide-out" 
                    className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
                    <i className="material-icons">menu</i>
                 </a>
            </div>
            
        )
    }
}

export default UserGroups;




