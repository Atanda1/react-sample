import React, {useContext} from 'react'
// import {UserConsumer} from './contexts/context'
import {UserContext} from '../App'


function FormChild() {

    const user = useContext(UserContext)
    console.log(user)
    return (
        <div>
            {/* <UserConsumer>
                {userName => {
                    return <h1>this is my {userName} </h1>
                }}
            </UserConsumer>
            */}
            <h3>the real user is {user}</h3>
        </div>
            
    )
}

export default FormChild
