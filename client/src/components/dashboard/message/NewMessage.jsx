/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import {Button,Modal,Input,Row} from 'react-materialize';


class NewMessage extends React.Component{
    constructor(props){
        super(props);
        this.createMessage=this.createMessage.bind(this);

        this.state={
            successMessage:'',
            validationMessage:'',
        }
    }
    createMessage(e){
    e.preventDefault();
    //validates the message body --add validation for selected group
     if(!this.refs.group_message.value){
        this.setState({validationMessage:'Enter a message'})
        return;
     }
    else if(!this.props.group.name){
       this.setState({validationMessage:'Select a group to post'})
       return; 
    }

     let message=this.refs.group_message.value;
     let priority=document.getElementById('priority').value
     let groupId=this.props.group.id;
     //pass parameters to createMessage method///
     this.props.createMessage(message,priority,groupId);
     
     //this.setState({validationMessage:''})
     
     this.refs.group_message.value='';
    }
    render(){
        return(              
            <div>
              <Modal header=''
	            bottomSheet
	            trigger={
		          <Button waves='light'>New Message</Button>
	            }>
                <div className=''>
                    <p className='center'>Post to {this.props.group.name}</p>
                    <form onSubmit={this.createMessage}>
                        <p className='green-text center'>{this.state.successMessage}</p>
                        <p className='red-text center'>{this.state.validationMessage}</p>
                        <div className='row'>
                            <div className="input-field col m6 offset-m3">
                                <input id="group_message" ref='group_message' type="text" className="validate" required/>
                                <label>Message</label>
                            </div>
                            <div className='input-field'>
	                            <Input className='col m6 offset-m3' ref='priority' id='priority' type='select' label="Priority" defaultValue='3'>
		                            <option value='1'>Critical</option>
		                            <option value='2'>Urgent</option>
		                            <option value='3'>Normal</option>
	                            </Input>
                            </div>
                         </div>
                         <div className='row'>
                            <div className="col m7 offset-m3 center">
                                <button type='submit' name='action' 
                                    className='waves-effect waves-light btn col s12'>
                                        PostIt
                                </button>
                            </div>
                        </div>
                    </form>
                     
                    
                </div>
                </Modal>
            </div>
        )
    }
}


export default NewMessage
