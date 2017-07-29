/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import $ from 'Jquery';



class UserGroups extends React.Component{
    
    render(){
        return(
            <div>
               
               
                 
                 <li className="logo">
                   <a id="logo-container" href="/" className="brand-logo"><i className="Tiny material-icons">add</i><strong>GROUPS</strong></a>
                 </li>
                
                 <br/>
                 <li className="bold"><a href="#" className="waves-effect waves-teal">Laravel</a></li>
                 <li className="bold active"><a href="#" className="waves-effect waves-teal">Ruby on rails</a></li>
                 <li className="bold"><a href="#" className="waves-effect waves-teal">Django girls</a></li>
                 <li className="bold"><a href="#" className="waves-effect waves-teal">Java Ninjas</a></li>
                 <li className="bold"><a href="#" className="waves-effect waves-teal">NodeJs</a></li>
              
               
            </div>
        )
    }
}

export default UserGroups;