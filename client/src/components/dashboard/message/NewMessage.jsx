/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import {Button,Input} from 'react-materialize';


class NewMessage extends React.Component{
   
//    componentWillMount()
//    {
//        console.log(this.props.groups)
//    }
    render(){
        console.log(this.props.groups)
        return(  
            <div>
                <h3>New Message</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="content" ref="content" type="text" className="validate" required/>
                            <label>Content</label>
                        </div>
                    </div>
                     <div className="row">
                        <div className='input-field col s12'>
                            <Input className='' ref='group' id='group' type='select' label="Group" 
                                defaultValue='3'>
                                <option value='1'>Laravel Group</option>
                                <option value='2'>Node Nigeria</option>
                                <option value='3'>Django girls</option>
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
                                    className='black btn col s12'>
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
