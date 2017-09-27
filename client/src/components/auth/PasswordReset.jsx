/*eslint-disable */
import React from 'react';
import Navigation from '../navigation/Navigation.jsx'

class PasswordReset extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    handleSubmitPasswordReset(e)
    {
        e.preventDefault();
        let password =this.refs.password.value;
        let password_confirm =this.refs.password_confirm.value;
        
        alert('touched')

        // check if  

        this.refs.reset_form.reset();
    }
    render()
    {
      
        return(
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
                                    <span className="card-title center">Reset Password</span>
                                    <form ref="reset_form" onSubmit={this.handleSubmitPasswordReset.bind(this)}>
                                        <div className='row'>
                                            <div className="input-field col s8 offset-s2">
                                                <input id="password" ref='password' placeholder="New Password" type="password" className="validate" required/>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="input-field col s8 offset-s2">
                                                <input id="cpassword" ref='password_confirm' placeholder="Confirm Password" type="password" className="validate" required/>
                                            </div>
                                        </div>
                                
                                        <div className='row'>
                                            <div className="col s8 offset-s2 center">
                                                <button type='submit' name='action' 
                                                    className='purple darken-4 btn col s12'>
                                                    Reset
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

export default PasswordReset;