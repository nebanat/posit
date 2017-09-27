import React from 'react';
import {browserHistory} from 'react-router'


class SearchAdd extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    handleSearchUserSubmit(e)
    {
        e.preventDefault()
        let user = this.refs.searchUser.value;
        let groupId = this.props.group.id;

        browserHistory.push({
            pathname:`/search`,
            query:{search:user,id:groupId}
        })

        
       this.refs.searchUserForm.reset();
    }
    render()
    {
        return(
            <div>
               <form ref="searchUserForm" onSubmit={this.handleSearchUserSubmit.bind(this)}>
                    <input type="text" ref="searchUser" className="black-text" placeholder="Search a user not in this group" required/> 
               </form>
              
            </div>
           )
    }
}

export default SearchAdd;