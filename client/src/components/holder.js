 <main>
                    <div className=''>
                        <div className="row">
                            <div className="col s2 collection">
                                <div className="collection-header center">
                                    <NewGroup createGroup={this.props.createGroup}/>
                                </div>
                               <UserGroups groups={this.props.userGroups} 
                                            active={this.props.active}
                                        selectGroup={this.props.selectGroup}
                                        />
                            </div>
                            <div className="col s7">
                                <GroupInfo group={this.props.selectedGroup} />
                                <GroupMessages messages={this.props.currentGroupMessages}/>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="white lighten-5 page-footer">
                    <div className='container'>
                        <div className='row'>
                            <div className='col m6 offset-m6'>
                                <NewMessage group={this.props.selectedGroup}
                                            createMessage={this.props.createMessage}/>
                            </div>
                        </div>
                    </div>
                    
                </footer>

                //user groups/////////////////////////////////////////////////////////////////
                constructor(props){
        super(props);
        this.setSelectedGroup = this.setSelectedGroup.bind(this);
        this.state={
            //initializes the active group to null//
            //active:null
        }
        
    }
    
    setSelectedGroup(value){
       //sends group to the main app//
       this.props.selectGroup(value)

    }
    showSelectedGroup(value){
        
        if(this.props.active===value){
            return 'collection-item active center'
        }
        return 'collection-item center'
    }
    
    render(){
        return(
            <div className=''>
                
                {
                
                //  this.props.groups.map(group=>(
                //   <a key={group.id} onClick={()=>this.setSelectedGroup(group)}
                //   href="#" className={this.showSelectedGroup(group.id)}>{group.name}</a>
                 
                //   ))
                } 
                
               
            </div>   
        )
    }
}

UserGroups.defaultProps={
  //active:'active'
}

//new message//

//user groups//
            <ul id="nav-mobile" className="side-nav fixed purple darken-4">
                    <h3 className="white-text">PostIt</h3>
                    {
                        this.props.groups.map((group,i)=>
                            <li className="bold" key={i}>
                                <Link to={`/group/${group.id}/messages`} className="white-text">{group.name}</Link>
                            </li>
                        )
                    }
                </ul>



