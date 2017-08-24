/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import UserGroups from './user/UserGroups.jsx';
import GroupInfo from './group/GroupInfo.jsx';
import NewMessage from './message/NewMessage.jsx';
import GroupMessages from './message/GroupMessages.jsx';
import Navigation from './Navigation.jsx'
import UserInfo from './user/UserInfo.jsx';
import NewGroup from './group/NewGroup.jsx';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Navigation />
                </header>
                <main>
                    <div className=''>
                        <div className="row">
                            <div className="col s2 collection">
                                <div className="collection-header center">
                                    <NewGroup createGroup={this.props.createGroup}/>
                                </div>
                               <UserGroups groups={this.props.userGroups} 
                                            active={this.props.active}
                                        selectGroup={this.props.selectGroup}
                                        />
                            </div>
                            <div className="col s7">
                                <GroupInfo group={this.props.selectedGroup} />
                                <GroupMessages messages={this.props.currentGroupMessages}/>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="white lighten-5 page-footer">
                    <div className='container'>
                        <div className='row'>
                            <div className='col m6 offset-m6'>
                                <NewMessage group={this.props.selectedGroup}
                                            createMessage={this.props.createMessage}/>
                            </div>
                        </div>
                    </div>
                    
                </footer>
                
            </div>
           
        )
    }
}

export default Dashboard
