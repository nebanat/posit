/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { getAccessToken } from '../../utils/AuthService'
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';

class NewGroup extends React.Component{
    
    handleGroupSubmit(e)
    {
        e.preventDefault();
        
        let name = this.refs.name.value;
        let description = this.refs.description.value;
       
     
        this.props.createGroup(name,description);

        this.refs.groupForm.reset();
    }
    render(){
        return (
            <div>
                <h2>New Group</h2>
                <form ref="groupForm" onSubmit={this.handleGroupSubmit.bind(this)} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="content" ref="name" type="text" className="validate" required/>
                            <label>Name</label>
                        </div>
                    </div>
                     <div className="row">
                        <div className="input-field col s12">
                            <textarea id="description" ref='description' className="materialize-textarea"></textarea>
                            <label>Description (optional)</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col m3">
                            <button type='submit' name='action' 
                                    className='black btn col s12'>
                                        Create Group
                                </button>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }

}
export default NewGroup
