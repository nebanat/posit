import React from 'react';
import SideNav from '../navigation/SideNav.jsx';
import Navigation from '../navigation/Navigation.jsx'
import { getSearchedUser } from '../utils/postit-api'
import Loader from '../loader/Loader.jsx'


class Dashboard extends React.Component{
   
    loadData()
    {
        this.props.fetchUserGroups();
        
        this.props.fetchUsers();
    }
    componentWillMount()
    {
        this.loadData();

    }
   
    render(){
        
        return(
            <div>
                <header>
                <Navigation {...this.props}/>
                
                {
                    (this.props.groupIsLoading)?(<Loader/>):('')
                }
                    <div className="row">
                        <div className="col s3">
                            <SideNav {...this.props}/>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="row">
                        <div className="col s9 push-s3">
                           {React.cloneElement(this.props.children,this.props)}
                        </div>
                    </div>

                </main>
            </div>
            
        )
    }
}

export default Dashboard
