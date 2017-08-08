/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { getAccessToken } from '../../utils/AuthService'
import {Button,Modal,Row,Input} from 'react-materialize';
import axios from 'axios';

class NewGroup extends React.Component{
    constructor(props){
        super(props)
       
        this.state={
            validationMessage:'',
            successMessage:''
        }
    }
    
    createNewGroup(e){
        e.preventDefault();
        
        if(!this.refs.groupName.value){
            this.setState({validationMessage:'Enter a Group name'});
            return;
        }
        
        let groupName = this.refs.groupName.value;
        let groupDescription = this.refs.groupDescription.value

        this.props.createGroup(groupName,groupDescription);
        
        this.refs.groupName.value='';
        this.refs.groupDescription.value='';
        
        this.setState({successMessage:'Group successfully created'})
    }


    
    
   
    render(){
        return (
            <div>
                 <div className="logo">
                   <Modal 
                   header='Create New Group'
                   trigger={
                        <a className="collection-item center">Groups<i className="material-icons right">add</i></a>
                        }>
                        <div className='row'>
                            <form onSubmit={this.createNewGroup.bind(this)} className='col s12'>
                                <p className='green-text center'>{this.state.successMessage}</p>
                                <p className='red-text center'>{this.state.validationMessage}</p>
                                <div className='row'>
                                    <div className="input-field col s12">
                                        <input id="group_name" ref='groupName' type="text" className="validate" required/>
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="description" ref='groupDescription' className="materialize-textarea"></textarea>
                                        <label>Description (optional)</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="input-field col s12">
                                         <div className="chip">
                                                 Users
                                                <i className="close material-icons">close</i>
                                        </div>
                                        <input placeholder='Add group members' id="group_members" type="text" 
                                            className="validate"/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <button type='submit' 
                                            className="waves-effect waves-light btn">
                                            Create
                                    </button>
                                </div>
                            </form>
                        </div>
	                    
                </Modal>
                 </div>
                 <hr/>
            </div>
        );
    }

}
export default NewGroup
