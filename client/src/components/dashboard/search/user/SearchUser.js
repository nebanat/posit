import React from 'react';
import  { browserHistory } from 'react-router';


class SearchUser extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    handleSearchUserSubmit(e)
    {
        e.preventDefault()
        let user = this.refs.searchUser.value;
        
        browserHistory.push({
            pathname:`/search`,
            query:{search:user}
        })

        this.refs.searchUserForm.reset();
    }
    render()
    {
        return(
            <div>
               <div className="input-field col s4 push-s3">
                   <form ref="searchUserForm" onSubmit={this.handleSearchUserSubmit.bind(this)}>
                        <input type="text" ref="searchUser" className="black-text" placeholder="Search User" required/> 
                   </form>
                </div>
            </div>
           )
    }
}

export default SearchUser;