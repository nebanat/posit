import React from 'react';
import $ from 'jquery'

class Initialize extends React.Component
{
    render()
    {
        return(
            <script>
                { $(".button-collapse").sideNav() }
            </script>
        )
    }
}

export default Initialize