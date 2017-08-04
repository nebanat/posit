/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../dashboard/Navigation.jsx'
import { Link } from 'react-router';

class Login extends React.Component{
   render(){
       return(
           <div>
                <Navigation/>
                <div className="row" style={{"margin-top":"20px"}}>
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title center">Login</span>
                                <form action="">
                                    <div className='row'>
                                    <div className="input-field col s8 offset-s2">
                                        <input id="group_name" ref='groupName' type="text" className="validate"/>
                                        <label>Username</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="input-field col s8 offset-s2">
                                        <input id="group_name" ref='groupName' type="password" className="validate"/>
                                        <label>Password</label>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col s8 offset-s2 center">
                                        <Link to='/' type='submit' className="waves-effect waves-light btn col s12">Login</Link>
                                    </div>
                                </div>
                                <br/>
                                </form>
                                
                                <div className='row'>
                                    <div className="col s8 offset-s2">
                                        <Link to='' className="left"><i className="material-icons left">lock
                                        </i>Forgot Password</Link>
                                        <Link to='/register' className="right">Sign Up</Link>
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

export default Login;




