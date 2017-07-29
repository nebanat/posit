/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import UserGroups from './user/UserGroups.jsx';
import GroupInfo from './group/GroupInfo.jsx';
import NewMessageButton from './message/NewMessageButton.jsx';
import GroupMessages from './message/GroupMessages.jsx';
import Navigation from './Navigation.jsx'
import UserInfo from './user/UserInfo.jsx';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="container"><a href="#" data-activates="nav-mobile" 
                        className="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
                        <i className="material-icons">menu</i></a></div>
                        <ul id="nav-mobile" className="side-nav fixed">
                          <li><UserInfo user={this.props.userInfo} /></li>
                         
                        </ul>
                </header>
                <main>
                    <div className='container'>
                        <div className="row" style={{'margin-left':'90px'}}>
                            <div className="section col m12">
                                <Navigation />
                                <GroupInfo />
                                <GroupMessages />
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="white lighten-5 page-footer"></footer>
                
            </div>
           
        )
    }
}

export default Dashboard
