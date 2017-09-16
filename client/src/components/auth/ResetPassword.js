/*eslint-disable */
import React,{Component} from 'react';
import Navigation from '../navigation/Navigation.jsx'
import { Link } from 'react-router';

class ResetPassword extends Component
{
   handleResetOnSubmit(e)
   {
       e.preventDefault();

       alert(this.refs.email.value);
   } 
    render(){
        return (
            <div>
            <Navigation/>
            <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                    <br/><br/><br/>
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title center">Recover Password</span>
                                <form onSubmit={this.handleResetOnSubmit.bind(this)}>
                                    <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input id="email" ref='email' placeholder="Enter your Email" type="email" className="validate" required/>
                                        </div>
                                    </div>
                            
                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <button type='submit' name='action' 
                                                className='purple darken-4 btn col s12'>
                                                Send Reset Link
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
           
       </div>
        )
    }
} 

export default ResetPassword;