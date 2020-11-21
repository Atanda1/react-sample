import React from 'react';

const HigherComponent = WrappedComponent => {
   
 class higherComponent extends React.Component {
        
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }

        incrementCounter =( ) => {
            this.setState( prevState =>{
               return { count : prevState.count + 1 }
            })
        }
        
        render() {
            return (
                <div>
                    <WrappedComponent
                        count = {this.state.count}
                        incrementCounter = {this.incrementCounter}
                        {...this.props}
                    />
                </div>
            )
        }
    }
    return higherComponent
}

export default HigherComponent