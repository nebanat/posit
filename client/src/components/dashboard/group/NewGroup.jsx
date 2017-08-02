/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'Jquery';
import {Button,Modal,Row,Input} from 'react-materialize';

class NewGroup extends React.Component{
    constructor(props){
        super(props)
        //this.createNewGroup=this.createNewGroup.bind(this)
    }
    
    createNewGroup(e){
        e.preventDefault();
        let groupId=3;//this will be deleted later//
        let groupName=this.refs.groupName.value;
        let groupDescription=this.refs.groupDescription.value;
        
        var newGroup ={
            "name":groupName,
            "description":groupDescription,
            "id":groupId
        }
        //alert(newGroup);

        this.props.createGroup(newGroup);

        this.refs.groupName.value='';
        this.refs.groupDescription.value='';
       

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
                                <div className='row'>
                                    <div className="input-field col s12">
                                        <input id="group_name" ref='groupName' type="text" className="validate"/>
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
                                    <a onClick={this.createNewGroup.bind(this)} type='submit' className="waves-effect waves-light btn">Create</a>
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
