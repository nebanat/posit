/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { getAccessToken } from '../../utils/AuthService'
import axios from 'axios';

class NewGroup extends React.Component{
    
    render(){
        return (
            <div>
                <h2>New Group</h2>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="content" ref="content" type="text" className="validate" required/>
                            <label>Content</label>
                        </div>
                    </div>
                     <div className="row">
                        <div className="input-field col s12">
                            <textarea id="description" ref='groupDescription' className="materialize-textarea"></textarea>
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
