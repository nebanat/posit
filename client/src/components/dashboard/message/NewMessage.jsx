/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import {Button,Input} from 'react-materialize';


class NewMessage extends React.Component{
   
    handleOnSubmitMessage(e)
    {
        e.preventDefault();

        let message = this.refs.content.value;
        let priority = document.getElementById('priority').value;
        let groupId = document.getElementById('group').value;

        //alert(groupId);
        this.props.createMessage(message,priority,groupId);

        this.refs.messageForm.reset();
    }
    render(){
       
        return(  
            <div>
                <h3>New Message</h3>
                <form ref="messageForm" onSubmit={this.handleOnSubmitMessage.bind(this)} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="content" ref="content" type="text" className="validate" required/>
                            <label>Content</label>
                        </div>
                    </div>
                     <div className="row">
                        <div className='input-field col s12'>
                            <Input className='' ref='group' id='group' type='select' label="Group">
                                {
                                    this.props.groups.map((group,i)=>
                                    <option value={group.id} key={i}>{group.name}</option> )
                                }
                            </Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className='input-field col s12'>
                            <Input className='' ref='priority' id='priority' type='select' label="Priority" 
                                defaultValue='3'>
                                <option value='1'>Critical</option>
                                <option value='2'>Urgent</option>
                                <option value='3'>Normal</option>
                            </Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m3">
                            <button type='submit' name='action' 
                                    className='purple darken-4 btn col s12'>
                                        PostIt
                                </button>
                        </div>
                        
                    </div>
                </form>
            </div>          
            
        )
    }
}


export default NewMessage
