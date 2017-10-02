import React,{Component} from 'react'
import {Link} from 'react-router'
import Navigation from '../../navigation/Navigation.jsx'

class Home extends Component
{
    render(){
        return (
            <div>
                <Navigation/>
                <div className='section purple darken-4'>
                    <div className='container'>
                        <br/><br/><br/>
                        <h2 className="header center white-text">PostIt-Group Messaging</h2>
                    </div>
                    <div className='row center'>
                        <h5 className="header col s12 white-text">
                            A modern Group Messaging for you and your group
                        </h5>
                        <br/><br/><br/><br/>
                    </div>
                    <div className='row center'>
                        <Link to='/register' className="btn-large waves-effect waves-light orange">
                            Get Started
                        </Link>
                        <br/><br/><br/><br/>
                    </div>
                </div>
                <div className="container">
                    <br/>
                    <div className='section'>
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center black-text">
                                        <i className="large material-icons">email</i>
                                    </h2>
                                    <h5 className="center">Create Group</h5>
                                    <p className="black-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Cras nec dictum est. Quisque pellentesque, diam quis maximus vulputate, 
                                    nunc diam porttitor odio,non molestie nisi nulla sed magna
                                    </p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center black-text">
                                        <i className="large material-icons">add_a_photo</i>
                                    </h2>
                                    <h5 className="center">Post Message</h5>
                                    <p className="black-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Cras nec dictum est. Quisque pellentesque, diam quis maximus vulputate, 
                                    nunc diam porttitor odio,non molestie nisi nulla sed magna
                                    </p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center black-text">
                                        <i className="large material-icons">equalizer</i>
                                    </h2>
                                    <h5 className="center">Add Users</h5>
                                    <p className="black-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Cras nec dictum est. Quisque pellentesque, diam quis maximus vulputate, 
                                    nunc diam porttitor odio,non molestie nisi nulla sed magna
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='page-footer purple darken-4'>
                    <div className='container'>
                        <div className="row">
                            <div className="col l3 s12">
                                <h5 className="white-text">Product</h5>
                                <ul>
                                    <li><Link className="white-text"  to="/login">Overview</Link></li><br/>
                                    <li><Link className="white-text"  to="/login">Pricing</Link></li><br/>
                                </ul>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Usage</h5>
                                <ul>
                                    <li><Link className="white-text"  to="/login">Login</Link></li><br/>
                                    <li><Link className="white-text"  to="/register">Register</Link></li><br/>
                                    <li><Link className="white-text"  to="/register">Password recovery</Link></li><br/>
                                </ul>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Legals</h5>
                                 <ul>
                                    <li><Link className="white-text"  to="/login">Terms</Link></li><br/>
                                    <li><Link className="white-text"  to="/login">Conditions</Link></li><br/>
                                </ul>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Company</h5>
                                 <ul>
                                    <li><Link className="white-text"  to="/login">Team</Link></li><br/>
                                    <li><Link className="white-text"  to="/login">Partner Program</Link></li><br/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Made by  <a className="white-text" href="#">PostIt Inc</a>
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}

export default Home;
