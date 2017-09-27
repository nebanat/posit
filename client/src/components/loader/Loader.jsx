/*eslint-disable */
import React from 'react'

class Loader extends React.Component{
    render()
    {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        )
    }
}

export default Loader;