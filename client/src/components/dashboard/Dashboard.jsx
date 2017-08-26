/*eslint-disable */
import React from 'react';
import UserGroups from './user/UserGroups.jsx';
import Navigation from './Navigation.jsx'
import { getUserGroups,getAllUsers } from '../utils/postit-api'



class Dashboard extends React.Component{
    componentWillMount()
    {
      this.props.fetchUserGroups();
      
      this.props.fetchUsers();
    //   getAllUsers().then((response)=>{
    //     const users=response.data   
    //     console.log(users)
    // })
    }
    render(){
        return(
            <div>
                <header>
                    <Navigation {...this.props}/>
                    <div className="row">
                        <div className="col s3">
                            <UserGroups {...this.props}/>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="row">
                        <div className="col s7 push-s3">
                           {React.cloneElement(this.props.children,this.props)}
                        </div>
                    </div>
                </main>
            </div>
            
        )
    }
}

export default Dashboard
