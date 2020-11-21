import React from 'react'

 const childInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <h1>REF THING</h1>
           <input ref={ref}/> 
        </div>
    )
})

export default childInput