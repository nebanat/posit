/*eslint-disable */
import React from 'react';
import {Collapsible,CollapsibleItem} from 'react-materialize'
import GroupUsers from './GroupUsers'
import SearchAdd from '../search/user/SearchAdd'


class GroupSideBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
       
        return(
            <div>
                <Collapsible>
                    <CollapsibleItem header='Members' icon='group'>
                        <GroupUsers {...this.props}/>
                    </CollapsibleItem>
                    <CollapsibleItem header='Add Member' icon='add_circle'>
                        <SearchAdd {...this.props}/>
                    </CollapsibleItem>
                </Collapsible>  
            </div>
           )
    }
}

export default GroupSideBar;