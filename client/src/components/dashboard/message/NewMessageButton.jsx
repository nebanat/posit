/*eslint-disable */
import React from 'react';
import ReactDOM from 'react';


class NewMessageButton extends React.Component{
    render(){
        return(
            <div>
              <div className="container">
                <div className="row">
                  <div className="col s6 offset-s6">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">New Message</a>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

// ReactDOM.render(
//     <NewMessageButton/>,
//     document.getElementById('footer')
// )

export default NewMessageButton
