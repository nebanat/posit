/*eslint-disable */
import React from 'react';
import {Collapsible,CollapsibleItem} from 'react-materialize'


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
                <h4>Test Page</h4>
                <div className="row">
                    <div className="col s4">
                    <Collapsible>
                        <CollapsibleItem header='Members' icon='filter_drama'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Second' icon='place'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Third' icon='whatshot'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                    </Collapsible>  

                    </div>
                </div>
                
                
            </div>
           )
    }
}

export default Tester;