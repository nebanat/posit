/*eslint-disable */
import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import Chips, { Chip } from 'react-chips';
//import 'materialize-css';
//import 'materialize-css/dist/css/materialize.min.css';

class Tester extends React.Component
{
    constructor(props)
    {
        super(props);
        
        
    }
    
    
   
    render()
    {
       
        return(
            <div>
                <h1>Edited test</h1>

                <div className="row">
                    <div className="col s12 m6">
                        <div className="card white darken-1">
                            <div className="card-content black-text">
                            <span className="card-title">Group Name</span>
                                <p>Group description</p>
                            </div>
                            <div className="card-action">
                                <div className="stats">
                                    <i className="tiny material-icons">access_time</i>  Created 2 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
             
            </div>
           )
    }
}

export default Tester;