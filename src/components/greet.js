import React from 'react';

const Greet = (props) => {
    return (
        <div>
            <h1>My name is {props.name}</h1> 
            {props.children}
        </div>
    )    
};

export default Greet;