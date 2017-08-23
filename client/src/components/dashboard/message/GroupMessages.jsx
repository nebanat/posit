/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';


class GroupMessages extends React.Component{
    
    messageTypeColor(value){
        if(value===1){
           return "new badge red darken-4 left secondary-content"
        }
        else if(value===2){
            return "new badge yellow darken-4 left secondary-content"
        }
        else if(value===3){
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
    noMessages(){
        // const messages =this.props.message;
         
        if(this.props.messages){
            return this.props.messages.map(message=>(
                  <li className="collection-item avatar" key={message.content}>
                    <img alt="" className="circle"/>
                    <strong className="title">@{message.userId.message}<small><i className='teal-text'> {new Date(message.createdAt).toDateString()} </i></small>
                    </strong>
                    <br/>
                    <p>{message.content}</p>
                    <span className={this.messageTypeColor(message.priority)} data-badge-caption={this.messageType(message.priority)}>
                    </span>
                  </li>
              ))
        }
        return <div className='center'>Group has no messages</div>
        
    }
    render(){
        return (
            <div>
               <ul className="collection">
                   {this.noMessages()}
                </ul>
            
            </div>

        );
    }

}
export default GroupMessages