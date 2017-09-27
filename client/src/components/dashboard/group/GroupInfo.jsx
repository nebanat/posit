/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

class GroupInfo extends React.Component{
    
    noGroupToShow(){
      
    }
    groupToShow(){
        if(this.props.group){
         return <div><h5>{this.props.group.name}</h5><i>{this.props.group.description}</i></div>
        }

        return "No group selected"
        
    }
    render(){
        return (
            <div>
                {this.groupToShow()}
            </div>

        );
    }

}
export default GroupInfo 

