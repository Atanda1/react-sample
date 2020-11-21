import React, { Component } from 'react'
import ChildInput from './childInput'

 class parentInput extends Component {
    constructor(props) {
        super(props)
    
        this.theRef = React.createRef();
    }
    
    changeHandler = () => {
        this.theRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ChildInput ref={this.theRef}/>
                <button onClick ={this.changeHandler}>REF</button>
            </div>
        )
    }
}

export default parentInput
