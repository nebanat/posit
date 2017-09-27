/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/Navigation.jsx'
import { Router,Link,Redirect,browserHistory } from 'react-router';
import axios from 'axios';
import { registerUser } from '../utils/postit-api.js'

class Register extends React.Component{
   constructor(props){
       super(props)
       this.registerUser=this.registerUser.bind(this);
    
}
    
   registerUser(e){
       e.preventDefault();
       let username = this.refs.username.value;
       let email = this.refs.email.value;
       let password = this.refs.password.value;
       
       this.props.signUpUser(username,email,password);
    }

    componentWillMount(){
        this.props.signUpUserSuccess('');
        this.props.signUpUserError('');
    }

   render(){
        return(
           <div>
                <Navigation/>
                <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                        <br/>
                        <div className="col s12 m6 offset-m3">
                            
                            <div className="card">
                                <div className="card-content">
                                    <p className='red-text center col s12'>{(this.props.registerErrorMessage && !this.props.registerSuccessMessage) ? this.props.registerErrorMessage:''}</p><br/>
                                    <p className='green-text center col s12'>
                                    {(this.props.registerSuccessMessage) ? this.props.registerSuccessMessage:''}
                                    <span><Link to='/login'>{this.props.registerSuccessMessage ? ' Login here' : ' '}</Link></span></p>
                                    <br/>
                                    <span className="card-title center">Register</span>
                                    <form onSubmit={this.registerUser}>
                                        <div className='row'>
                                            <div className="input-field col s10 offset-s1">
                                                <input id="username" ref='username' type="text" className="validate" required/>
                                                <label>Username</label>
                                                
                                            </div>
                                            
                                        </div>
                                        <div className='row'>
                                            <div className="input-field col s10 offset-s1">
                                                <input id="email" ref='email' type="email" className="validate" required/>
                                                <label data-error="Enter a valid Email" data-success="correct">Email</label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="input-field col s10 offset-s1">
                                                <input id="password" ref='password' type="password" className="validate" required/>
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="input-field col s10 offset-s1">
                                                <input id="cpassword" ref='cpassword' type="password" className="validate" required/>
                                                <label>Confirm Password</label>
                                            </div>
                                        </div>
                                    <div className='row'>
                                        <div className="col s10 offset-s1 center">
                                            <button type='submit' name='action' 
                                                className='purple darken-4 btn col s12'>
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    </form>
                                    
                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <span>Have an account?</span><Link to='/login'> Sign In</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                

                </div>
            
           </div>
       )
   }
}

export default Register;
