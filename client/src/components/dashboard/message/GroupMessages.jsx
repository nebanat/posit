/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';


class GroupMessages extends React.Component{
    render(){
        return (
            <div>
               <ul className="collection">
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@djcranker<small><i className='teal-text'> 1:30PM </i></small></strong>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        <span className="new badge red darken-4 left secondary-content" data-badge-caption="critical"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@bababeebest<small><i className='teal-text'> 2:59PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        <span className="new badge yellow darken-4 left secondary-content" data-badge-caption="urgent"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@babagloria<small><i className='teal-text'> 3:43PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="new badge blue darken-4 left secondary-content" data-badge-caption="normal"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@ashambilly<small><i className='teal-text'> 4:59PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="new badge red darken-4 left secondary-content" data-badge-caption="critical"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@djcranker<small><i className='teal-text'> 5:09PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        <span className="new badge yellow darken-4 left secondary-content" data-badge-caption="urgent"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@bababeebest<small><i className='teal-text'> 6:00PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        <span className="new badge blue darken-4 left secondary-content" data-badge-caption="normal"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@babagloria<small><i className='teal-text'> 7:20PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="new badge blue darken-4 left secondary-content" data-badge-caption="normal"></span>
                    </li>
                    <li className="collection-item avatar">
                        <img alt="" className="circle"/>
                        <strong className="title">@ashambilly<small><i className='teal-text'> 8:40PM </i></small></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span className="new badge yellow darken-4 left secondary-content" data-badge-caption="urgent"></span>
                    </li>
            </ul>
            
            </div>

        );
    }

}
export default GroupMessages