/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import SingleGroupMessages from './SingleGroupMessages';
import Tester from '../../Tester.jsx';


class GroupMessages extends React.Component{
    
    componentWillMount()
    {
        this.props.fetchMessages(this.props.params.id);
    }
    
    render(){
        const {id}=this.props.params;
        const i = this.props.groups.findIndex((group)=>group.id ==
            id);
        
        const group = this.props.groups[i];

        //console.log(group.name);

        return (
            <div>
                <h4>{group.name}</h4>
                <ul className="collection">
                {
                    this.props.messages.map((message,i)=>
                        <SingleGroupMessages message={message} key={i} i={i}/>)
                }
                </ul>
               
            </div>
            

        );
    }

}
export default GroupMessages