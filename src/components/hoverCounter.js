import React from 'react';
import higherComponent from './higherComponent'

const hoverCounter = (props) => {
    return (
        <div>
            <h1 onMouseOver= {props.incrementCounter}>My body count is {props.count}</h1> 
        </div>
    )    
};

export default higherComponent(hoverCounter);