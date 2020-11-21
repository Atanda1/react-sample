import React, {Component} from 'react';
import ComponentChild from './greetChild';


class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            message : "this is a boy"
        }
        this.useRef = React.createRef();
    }

    changeMessage () {
        this.setState ({
            message : "Thank you for Subscribing"
        })
    }

    changeGreeting(childname) {
        alert(`How are you my ${childname}`)
    }

    componentDidMount () {
        this.useRef.current.focus();
        console.log("highlighted")
    }

    newMessage = () => {
        this.setState ({
            message : "Thank you for Subscribing now" 
        })
    }

    render () {
        return (
            <div>
                 <ComponentChild theGreet= {this.changeGreeting}/> 
                 <h1>
                    {this.state.message}
                </h1>
                <button onClick= {() => this.changeMessage()}>Subscribe</button>
                <button onClick= {this.newMessage}>Subscribe</button>
                <input ref = {this.useRef}></input>
            </div>
           
        )
    }
}

export default Welcome;