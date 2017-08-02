//side nav with userinfo, new group and user groups//
<section>
                    <aside className=''>
                        <ul id="nav-mobile" className="side-nav fixed">
                        <li><UserInfo user={this.props.userInfo} /></li>
                        <NewGroup createGroup={this.props.createGroup}/>
                        <UserGroups groups={this.props.userGroups} 
                        active={this.props.active}
                        selectGroup={this.props.selectGroup}/> 
                        </ul>
                    </aside>
                </section>

                //footer section
                <div className='container' style={{"margin-left":"100px"}}>
                        <div className='row'>
                            <div className='col m6 offset-m6'>
                                <NewMessage/>
                            </div>
                        </div>
                    </div>