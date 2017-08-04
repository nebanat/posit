/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';
import {Button,Modal,Input,Row} from 'react-materialize';


class NewMessage extends React.Component{
    render(){
        return(
            <div>
              <Modal header=''
	            bottomSheet
	            trigger={
		          <Button waves='light'>New Message</Button>
	            }>
                <div className=''>
                     <div className='row'>
                        <div className="input-field col m6 offset-m3">
                            <input id="group_name" ref='groupName' type="text" className="validate"/>
                            <label>Message</label>
                        </div>
                    </div>
                    
                </div>
                </Modal>
            </div>
        )
    }
}


export default NewMessage
