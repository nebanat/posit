/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import $ from 'Jquery';
import PropTypes from 'prop-types';



class UserGroups extends React.Component{
    constructor(props){
        super(props);
        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.state={
            //initializes the active group to null//
            //active:null
        }
        
    }
    
    setSelectedGroup(value){
       //sends group to the main app//
       this.props.selectGroup(value)

    }
    showSelectedGroup(value){
        
        if(this.props.active===value){
            return 'collection-item active center'
        }
        return 'collection-item center'
    }
    
    render(){
        return(
            <div className=''>
                
                {
                
                 this.props.groups.map(group=>(
                  <a key={group.id} onClick={()=>this.setSelectedGroup(group)}
                  href="#" className={this.showSelectedGroup(group.id)}>{group.name}</a>
                 
                  ))
                } 
                
               
            </div>   
        )
    }
}

UserGroups.defaultProps={
  //active:'active'
}


export default UserGroups;