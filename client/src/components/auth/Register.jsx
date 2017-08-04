/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../dashboard/Navigation.jsx'
import { Router,Link,Redirect,browserHistory } from 'react-router';
import axios from 'axios';

class Register extends React.Component{
   constructor(props){
       super(props)
       this.registerUser=this.registerUser.bind(this);

    //    this.state={
    //        loaderState:'',
    //        submitButtonState:'waves-effect waves-light btn col s12'
    //    }

   }
   registerUser(e){
       e.preventDefault();
       
       axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/signup',
        headers:{
            'Content-type':'application/json; charset=utf-8'
        },
         data:JSON.stringify({
         "username": this.refs.username.value,
         "email": this.refs.email.value,
         "password":this.refs.password.value
          }) 
        })
        .then((response)=> {
            console.log(response.data);
            
            
        })
        .catch((error)=> {
         console.log(error);
        });
    }

   componentDidMount(){
     
        
    }
    render(){
        return(
           <div>
                <Navigation/>
                <div className="row clearfix">
                    <br/>
                    <div className="col s12 m6 offset-m3">
                        
                        <div className="card">
                            <div className="card-content">
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
                                            <input id="group_name" ref='groupName' type="password" className="validate" required/>
                                            <label>Confirm Password</label>
                                        </div>
                                    </div>
                                <div className='row'>
                                    <div className="col s10 offset-s1 center">
                                        <button onClick={this.registerUser} type='submit' name='action' 
                                            className='waves-effect waves-light btn col s12'>
                                            Register
                                        </button>
                                    </div>
                                </div>
                                <br/>
                                </form>
                                
                                <div className='row'>
                                    <div className="col s8 offset-s2 center">
                                        <span>Have an account?</span><Link to='/login'>Sign In</Link>
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
