/*eslint-disable */
import React from 'react';
import {Link} from 'react-router';
import 'url-search-params-polyfill';
import Navigation from '../../../navigation/Navigation.jsx';
import SingleUser from '../../group/SingleUser';

class SearchResultUser extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    componentDidMount()
    {
        let result= new URLSearchParams(window.location.search);
        const groupId = parseInt(result.getAll('id'));
        
        const user= new URLSearchParams(window.location.search)
        this.props.fetchSearchUsers(groupId,user.get('search'))
    }
   
   
    render()
    {
        let result= new URLSearchParams(window.location.search);
        let groupId = parseInt(result.getAll('id'));
    
       return(
            <div>
                <Link to={`group/${groupId}/messages`} className="purple-text darken-4">Back to Group</Link>
                <h5>Search result for {result.get('search')} </h5>
                <div className="row">
                    <div className="col s6">
                        <ul className="collection">
                                {
                                    this.props.searchUsers.map((user,i)=>
                                        <SingleUser {...this.props} key={i} i={i} user={user} groupId={groupId}/>
                                    )
                                    
                                }
                        </ul>
                    </div>
                </div>
            </div>
           )
    }
}

export default SearchResultUser;