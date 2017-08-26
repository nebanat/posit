/*eslint-disable */
import React,{Component} from 'react';

class UserGroups extends Component
{
    
    render()
    {
        //console.log(this.props.groups)
        return(
           <ul id="nav-mobile" className="side-nav fixed black ">
                <h1 className="white-text">PostIt</h1>
                
                <li className="bold "><a href="#" className="white-text">Laravel Ninjas</a></li>
                <li className="bold"><a href="#" className="white-text">Django girls</a></li>
                <li className="bold"><a href="#" className="white-text">Forloop</a></li>
                <li className="bold"><a href="#" className="white-text">Node Nigeia</a></li>
                
          </ul>
        )
    }
}

export default UserGroups;




