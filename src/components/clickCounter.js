import React from 'react';
import higherComponent from './higherComponent'

const ClickCounter = (props) => {
    return (
        <div>
            <button onClick= {props.incrementCounter}>My body count is {props.count}</button> 
        </div>
    )    
};

export default higherComponent(ClickCounter);