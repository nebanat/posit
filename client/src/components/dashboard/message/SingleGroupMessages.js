/*eslint-disable */
import React from 'react';

class SingleGroupMessages extends React.Component
{
    messageTypeColor(value){
        if(value==1){
           return "new badge red darken-4 left secondary-content"
        }
        else if(value==2){
            return "new badge yellow darken-4 left secondary-content"
        }
        else if(value==3){
            return "new badge blue darken-4 left secondary-content"
        }
    }

    messageType(value){
        if(value===1){
           return "critical"
        }
        else if(value===2){
            return "urgent"
        }
        else if(value===3){
            return "normal"
        }
    }

    render(){
        const {message,i} =this.props;
        
        return(
            <li className="collection-item avatar">
                <img alt="" className="circle"/>
                <strong className="title">@djcranker<small><i className='teal-text'>
                    {new Date(message.createdAt).toDateString()} </i></small>
                </strong>
                <br/>
                <p>{message.content}</p>
                <span className={this.messageTypeColor(message.priority)} 
                    data-badge-caption={this.messageType(message.priority)}>
                </span>
            </li>
        )
    }
}
export default SingleGroupMessages;