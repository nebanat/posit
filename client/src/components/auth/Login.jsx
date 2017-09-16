/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/Navigation.jsx'
import { Link,browserHistory } from 'react-router';
import axios from 'axios';
import decode from 'jwt-decode';

class Login extends React.Component{
   constructor(props){
       super(props)
       this.signInUser=this.signInUser.bind(this);

       this.state={
           successMessage:'',
           validationMessage:''
       }
   }
   
   signInUser(e){
    e.preventDefault();
    //axios backend call
     axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/signin',
        headers:{
            'Content-type':'application/json; charset=utf-8'
        },
         data:JSON.stringify({
         "username": this.refs.username.value,
         "password":this.refs.password.value
          }) 
        })
        .then((response)=> {
           localStorage.setItem('POSTIT_ACCESS_TOKEN',response.data.token)
           browserHistory.push({
               pathname:'/',
            });
        })
        .catch((error)=> {
            //when things go south//
            this.setState({validationMessage:"Invalid username or password"})
        });
    }

   

   render(){
       return(
           <div>
                <Navigation/>
                <div className="section purple darken-4">
                <div className="container">
                    <h4 className="center white-text">PostIt-Messaging</h4>
                    <div className="row clearfix">
                        <br/><br/>
                        <div className="col s12 m6 offset-m3">
                            <div className="card">
                                <div className="card-content">
                                    <p className='green-text center'>{this.state.successMessage}</p>
                                    <p className='red-text center'>{this.state.validationMessage}</p>
                                    <span className="card-title center">Sign In </span>
                                    <form onSubmit={this.signInUser}>
                                        <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input id="username" ref='username' type="text" className="validate" required/>
                                            <label>Username</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-field col s8 offset-s2">
                                            <input id="password" ref='password' type="password" className="validate" required/>
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col s8 offset-s2 center">
                                            <button type='submit' name='action' 
                                                className='purple darken-4 btn col s12'>
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                    <br/>
                                    </form>
                                    
                                    <div className='row'>
                                        <div className="col s8 offset-s2">
                                            <Link to='/password/reset' className="left"><i className="material-icons left">lock
                                            </i>Forgot Password</Link>
                                            <Link to='/register' className="right">Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/><br/><br/>

                </div>
                
                
           </div>
       )
   }
}

export default Login;




