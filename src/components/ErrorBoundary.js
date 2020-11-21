import React, { Component } from 'react'

 class ErrorBoundary extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            hasError : false
       }
   }
   
    static getDerivedStateFromError (err) {
        return {
            hasError : false
        }
    }  
   
   
    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h1>This is an error</h1>
                </div>
            ) 
        }
            return this.props.children
      
    }
}

export default ErrorBoundary
