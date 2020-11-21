import React, { Component } from 'react'
import FormChild from './formChild'

class form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             comments: '',
             name: ''
        }
    }
    
    updateName = (event) => {
        this.setState({
         name : event.target.value   
        })
    }
    render() {
        return (
            <div>
                 <form>
                <label>Name</label>
                    <input name="name" value= {this.state.name} onChange = {this.updateName}></input>
                </form> 
                <FormChild/>
            </div>
          
        )
    }
}

export default form
