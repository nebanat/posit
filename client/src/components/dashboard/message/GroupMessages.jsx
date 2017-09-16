/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Collapsible, CollapsibleItem } from 'react-materialize';
import SingleGroupMessages from './SingleGroupMessages';
import Tester from '../../Tester.jsx';
import GroupUsers from '../group/GroupUsers'
import GroupSideBar from '../group/GroupSideBar'




class GroupMessages extends React.Component{
    
    componentWillMount()
    {
        this.props.fetchMessages(this.props.params.id);

        this.props.fetchGroupUsers(this.props.params.id);
    }
    
    render(){
        const {id}=this.props.params;
        const i = this.props.groups.findIndex((group)=>group.id ==
            id);
        
        const group = this.props.groups[i];

        //console.log(group.name);

        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <h4>{group.name}</h4>
                        <ul className="collection">
                            {
                                this.props.messages.map((message,i)=>
                                    <SingleGroupMessages message={message} key={i} i={i}/>)
                            }
                        </ul>
                    </div>
                    <div className="col s4">
                      <GroupSideBar {...this.props}
                                    group={group}/>
                    </div>
                </div>
                
            </div>
            

        );
    }

}
export default GroupMessages