/*eslint-disable */
import React from 'react';

class Default extends React.Component{
    
    render(){
        //const {users}= this.props
        //console.log(users)
        return(
           <div>
                <h2>PostIt Home</h2>
                <ul>
                    {
                        this.props.users.map((user,i)=>
                                 <li key={i}>
                                     {user.email}
                                </li>
                             )
                    }
                    
                    
                </ul>
            </div>
            
            
        )
    }
}

export default Default